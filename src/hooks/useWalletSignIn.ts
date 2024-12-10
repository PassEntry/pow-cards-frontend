import { useWallet } from '@solana/wallet-adapter-react';
import bs58 from 'bs58';
import { useState } from 'react';

interface SignInData {
  domain: string;
  nonce: string;
  issuedAt: string;
}

export const useWalletSignIn = () => {
  const { publicKey, signMessage } = useWallet();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createSignInMessage = (data: SignInData) => {
    return `${data.domain} wants you to create a POW card with your Solana account:
${publicKey?.toBase58()}

Nonce: ${data.nonce}
Issued At: ${data.issuedAt}`;
  };

  const signIn = async () => {
    if (!publicKey || !signMessage) {
      setError('Wallet not connected');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      // 1. Get sign-in data from backend with publicKey
      const response = await fetch(`/api/v1/claim/init?publicKey=${publicKey.toBase58()}`);
      if (!response.ok) throw new Error('Failed to get sign-in data');
      
      const signInData: SignInData = await response.json();
      
      // 2. Create message to sign
      const message = createSignInMessage(signInData);
      const encodedMessage = new TextEncoder().encode(message);
      
      // 3. Request signature from wallet
      const signature = await signMessage(encodedMessage);
      
      // 4. Send signature to backend for verification
      const verifyResponse = await fetch('/api/v1/claim/wallet-pass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          publicKey: publicKey.toBase58(),
          signature: bs58.encode(signature),
        }),
      });

      if (!verifyResponse.ok) throw new Error('Signature verification failed');
      
      // 5. Return the verification result
      return await verifyResponse.json();

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    signIn,
    isLoading,
    error,
  };
}; 