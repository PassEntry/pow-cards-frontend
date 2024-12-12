import { useState } from 'react'
import loyaltyIllustration from '../../assets/images/loyalty-illustration.svg'
import eventIllustration from '../../assets/images/event-line.svg'
import nftAccessIllustration from '../../assets/images/nft-access.svg'
import poapIllustration from '../../assets/images/poap.svg'

export default function Features02() {
  const [category, setCategory] = useState<string>('1')

  const features = {
    '1': {
      title: "Loyalty Programs",
      description: "Transform traditional loyalty programs into Web3-powered rewards. Let customers earn crypto rewards and NFTs with every tap of their POW Card.",
      bullets: [
        {
          title: "Seamless Integration",
          description: "Easily integrate with existing POS systems and loyalty platforms"
        },
        {
          title: "Instant Rewards",
          description: "Customers earn crypto rewards in real-time with each transaction"
        },
        {
          title: "Tokenised Discounts",
          description: "Reward NFT token holders with discounts and perks for your loyalty program"
        }
      ]
    },
    '2': {
      title: "Event Ticketing",
      description: "Revolutionize event access with digital tickets that can't be counterfeited. POW Cards make entry management seamless while enabling unique attendee experiences.",
      bullets: [
        {
          title: "Secure Access",
          description: "Cryptographically secure passes that prevent fraud and scalping"
        },
        {
          title: "Smart Benefits",
          description: "Automatically unlock VIP perks and exclusive content for ticket holders"
        }
      ]
    },
    '3': {
      title: "NFT-Gated Access",
      description: "Create exclusive experiences for your NFT holders. POW Cards bridge the gap between digital ownership and real-world utility.",
      bullets: [
        {
          title: "Verify Ownership",
          description: "Instantly verify NFT holdings without complex wallet interactions"
        },
        {
          title: "Dynamic Access",
          description: "Grant access based on specific NFT traits or holding periods"
        }
      ]
    },
    '4': {
      title: "POAP Distribution",
      description: "Make memorable moments last forever with POAPs. Automatically distribute proof of attendance tokens to event participants.",
      bullets: [
        {
          title: "Automated Distribution",
          description: "Seamlessly distribute POAPs to attendees upon entry"
        },
        {
          title: "Custom Designs",
          description: "Create unique POAP designs for each event or milestone"
        },
        {
          title: "Historical Record",
          description: "Build a verifiable history of community participation"
        }
      ]
    }
  }

  const getFeatureImage = (categoryId: string) => {
    switch(categoryId) {
      case '1':
        return (
          <img 
            src={loyaltyIllustration} 
            className="w-full h-full"
            alt="Loyalty Programs"
          />
        )
      case '2':
        return (
          <img 
            src={eventIllustration} 
            className="w-full h-full"
            alt="Event Ticketing"
          />
        )
      case '3':
        return (
          <img 
            src={nftAccessIllustration} 
            className="w-full h-full"
            alt="NFT-Gated Access"
          />
        )
      case '4':
        return (
          <img 
            src={poapIllustration} 
            className="w-full h-full"
            alt="POAP Distribution"
          />
        )
      default:
        return null
    }
  }

  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-8">
            <h2 className="h2 mb-4" data-aos="fade-up">Unlock much more with your web3 wallet</h2>
            <p className="text-xl text-slate-500" data-aos="fade-up" data-aos-delay="200">
              Transform your Web3 wallet into a powerful tool for real-world experiences and rewards
            </p>
          </div>

          <div>
            {/* Category buttons */}
            <div className="pb-6 md:pb-10" data-aos="fade-up" data-aos-delay="400">
              <div className="flex flex-wrap justify-center -m-1.5">
                <button
                  className={`btn-sm m-1.5 h-8 shadow ${category === '1' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('1')}
                >
                  Loyalty Programs
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow ${category === '2' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('2')}
                >
                  Event Ticketing
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow ${category === '3' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('3')}
                >
                  NFT-Gated Access
                </button>
                <button
                  className={`btn-sm m-1.5 h-8 shadow ${category === '4' ? 'bg-blue-500 text-white' : 'bg-white text-gray-900 hover:bg-blue-50'}`}
                  onClick={() => setCategory('4')}
                >
                  POAP Distribution
                </button>
              </div>
            </div>

            {/* Section content */}
            <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:space-x-8 lg:space-x-16 xl:space-x-20 space-y-8 space-y-reverse md:space-y-0">
              {/* Content */}
              <div className="md:w-7/12 lg:w-1/2 order-1 md:order-none" data-aos="fade-right">
                {Object.entries(features).map(([key, feature]) => (
                  <div key={key} className={`${category !== key && 'hidden'}`}>
                    <h3 className="h3 mb-3">{feature.title}</h3>
                    <p className="text-lg text-gray-500 mb-8">
                      {feature.description}
                    </p>
                    <ul className="inline-flex flex-col space-y-6">
                      {feature.bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start" data-aos="fade-up" data-aos-delay={index * 100}>
                          <svg className="w-3 h-3 fill-current text-blue-500 mt-1.5 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                          </svg>
                          <div>
                            <div className="font-bold text-lg mb-1">{bullet.title}</div>
                            <div className="text-gray-500">
                              {bullet.description}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Image */}
              <div className="md:w-5/12 lg:w-1/2" data-aos="fade-left">
                {getFeatureImage(category)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 