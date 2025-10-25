import techproLogo from '../assets/logos/techpro.png';
import unitedCapitalsLogo from '../assets/logos/unitedcapitals.png';
import eufcLogo from '../assets/logos/eufc.png';
import academypaymentsLogo from '../assets/logos/academypayments.png';
import atomyumLogo from '../assets/logos/atomyum.png';
import avukatlazimLogo from '../assets/logos/avukatlazim.png';
import designycodeLogo from '../assets/logos/designycode.png';
import juniusLogo from '../assets/logos/juniustech.png';
import payologLogo from '../assets/logos/payolog.png';
import resultaatLogo from '../assets/logos/resultaat.png';
import wocopaLogo from '../assets/logos/wocopa.png';
import wsfLogo from '../assets/logos/wsf.png';

export function PartnersCarousel() {
  const partners = [
    { name: 'United Capitals', logo: unitedCapitalsLogo },
    { name: 'eufc.be', logo: eufcLogo },
    { name: 'TechPro Education', logo: techproLogo },
    { name: 'Academy Payments', logo: academypaymentsLogo },
    { name: 'Atomyum', logo: atomyumLogo },
    { name: 'avukatlazim.com', logo: avukatlazimLogo },
    { name: 'Designy Code', logo: designycodeLogo },
    { name: 'Junius Tech', logo: juniusLogo },
    { name: 'Payolog', logo: payologLogo },
    { name: 'Resultaat Werk', logo: resultaatLogo },
    { name: 'Wocopa', logo: wocopaLogo },
    { name: 'World Startup Forum', logo: wsfLogo },
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-900 mb-12 font-bold text-[32px]">Our Partners</h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-56 h-28 mx-4 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-24 h-24 object-contain p-1"
                  />
                ) : (
                  <span className="text-gray-700">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
