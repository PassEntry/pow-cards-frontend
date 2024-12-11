export const isCompatibleBrowser = (): boolean => {
  const userAgent = navigator.userAgent.toLowerCase();
  
  // Check for Phantom Wallet on iOS
  if (userAgent.includes('Phantom/ios')) {
    return false;
  }

  return true;
}; 