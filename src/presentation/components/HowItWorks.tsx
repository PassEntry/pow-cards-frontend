import React from 'react';

interface Step {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const WalletIcon = () => (
  <svg className="w-12 h-12 mx-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
      <path d="M19.4697 3.46967c-.2929.29289-.2929.76777 0 1.06066s.7677.29289 1.0606 0zm3.0606-.93934c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0zm-1.0606-1.06066-2 2 1.0606 1.06066 2-2z"/>
      <path d="M19.4967 11.7619l-.5303-.5303zm-2.9034.7258.5303-.5303zm2.1775 0 .5304.5304zm-7.2585-7.25854-.5304-.53033zm0 2.17758-.5304.53033zm.7258-2.90344.5303.53033zm-.5303-.53033-.7259.72586 1.0607 1.06066.7258-.72586zm-.7259 3.9641 5.081 5.08103 1.0607-1.0607-5.081-5.08099zm8.3193 5.08103.7258-.7259-1.0606-1.0606-.7259.7258zm.7258-.7259c2.2973-2.29728 2.2973-6.02193 0-8.31923l-1.0606 1.06066c1.7115 1.71151 1.7115 4.48642 0 6.19797zm-7.2586-7.25857c1.7116-1.71151 4.4865-1.71151 6.198 0l1.0606-1.06066c-2.2973-2.29729-6.0219-2.29729-8.3192 0zm-.7258 1.84278c-.2295-.22951-.2907-.42114-.2926-.55315-.0018-.12702.0493-.32046.2926-.56377l-1.0607-1.06066c-.4609.46092-.7406 1.02553-.7317 1.64589.0088.61535.2998 1.1604.7317 1.59235zm6.1979 5.08099c-.2295.2295-.4211.2907-.5531.2926-.1271.0018-.3205-.0493-.5638-.2926l-1.0607 1.0607c.461.4609 1.0256.7406 1.6459.7317.6154-.0088 1.1604-.2998 1.5924-.7317z"/>
      <path d="M4.53033 20.5303c.29289-.2929.29289-.7677 0-1.0606s-.76777-.2929-1.06066 0zm-3.06066.9394c-.29289.2929-.29289.7677 0 1.0606s.76777.2929 1.06066 0zm2-2-2 2 1.06066 1.0606 2-2z"/>
      <path d="M12.4877 16.5933l-.5303.5303zm-7.25854-5.081-.53033-.5304zm2.17758 0 .53033-.5304zm-2.90344.7258.53033.5303zm.53033.5303.72586-.7258-1.06066-1.0607-.72586.7259zm1.84278-.7258 5.08099 5.081 1.0607-1.0607-5.08103-5.081zm5.08099 6.1979-.7258.7259 1.0606 1.0606.7259-.7258zm-.7258.7259c-1.71155 1.7115-4.48646 1.7115-6.19797 0l-1.06066 1.0606c2.2973 2.2973 6.02195 2.2973 8.31923 0zm-7.25863-7.2586c-2.29729 2.2973-2.29729 6.0219 0 8.3192l1.06066-1.0606c-1.71151-1.7115-1.71151-4.4864 0-6.198zm3.9641-.7259c-.43195-.4319-.977-.7229-1.59235-.7317-.62036-.0089-1.18497.2708-1.64589.7317l1.06066 1.0607c.24331-.2433.43675-.2944.56377-.2926.13201.0019.32364.0631.55315.2926zm5.08103 8.3193c.4319-.432.7229-.977.7317-1.5924.0089-.6203-.2708-1.1849-.7317-1.6459l-1.0607 1.0607c.2433.2433.2944.4367.2926.5638-.0019.132-.0631.3236-.2926.5531z"/>
      <path d="M9.96967 8.96967c-.29289.29289-.29289.76777 0 1.06063.29293.2929.76773.2929 1.06063 0zm2.56063-.43934c.2929-.29289.2929-.76777 0-1.06066s-.7677-.29289-1.0606 0zm1.4394 4.43937c-.2929.2929-.2929.7677 0 1.0606s.7677.2929 1.0606 0zm2.5606-.4394c.2929-.2929.2929-.7677 0-1.0606s-.7677-.2929-1.0606 0zm-5.5-2.5 1.5-1.49997-1.0606-1.06066-1.50003 1.5zm4 4 1.5-1.5-1.0606-1.0606-1.5 1.5z"/>
    </g>
  </svg>
);

const CardIcon = () => (
  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const MobileIcon = () => (
  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const RewardsIcon = () => (
  <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const HowItWorks: React.FC = () => {
  const steps: Step[] = [
    {
      title: "Connect Wallet",
      description: "Link your Solana wallet securely to begin the claiming process",
      icon: <WalletIcon />
    },
    {
      title: "Claim Your Card",
      description: "Sign the transaction to mint your unique POW Card",
      icon: <CardIcon />
    },
    {
      title: "Add to Mobile Wallet",
      description: "Download your card to Apple Wallet or Google Pay",
      icon: <MobileIcon />
    },
    {
      title: "Tap & Go",
      description: "Use your card at participating locations to earn rewards and entry",
      icon: <RewardsIcon />
    }
  ];

  return (
    <section className="py-12 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="h2 text-slate-100 mb-4" data-aos="fade-up">How It Works</h2>
          <p className="text-xl text-slate-400" data-aos="fade-up" data-aos-delay="200">
            Get started with POW Cards in four simple steps
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={300 + (index * 100)}
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-blue-500/10 rounded-full mx-auto flex items-center justify-center text-blue-500">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-100 mb-2">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 