import React from "react";

export const Features: React.FC = () => {
    return (
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="grid md:grid-cols-3 gap-5 md:gap-16">
            <div>
                <div className="flex items-center mb-2">
                  <svg
                    className="mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-blue-500"
                      d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"
                    />
                  </svg>
                  <div className="font-hkgrotesk font-extrabold text-lg text-slate-800">
                    Mobile Wallet
                  </div>
                </div>
                <div className="text-slate-500">
                  Mint one of our cards directly into your Apple or Google
                  Wallet.
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <svg
                    className="mr-3 stroke-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                    />
                  </svg>
                  <div className="font-hkgrotesk font-extrabold text-lg text-slate-800">
                    Secure
                  </div>
                </div>
                <div className="text-slate-500">
                  Claim your exclusive POW Card by securely signing with your
                  wallet.
                </div>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <svg
                    className="mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      className="fill-blue-500"
                      d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
                    />
                  </svg>
                  <div className="font-hkgrotesk font-extrabold text-lg text-slate-800">
                    Universal Access
                  </div>
                </div>
                <div className="text-slate-500">
                  Connect your card with any Solana Wallet (Exodus, Phantom,
                  Solflare and more)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }