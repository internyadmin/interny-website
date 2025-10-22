import { Button } from './ui/button';
import heroImage from 'figma:asset/f30b9ce8159d8dd947280bf832844116eed30fa9.png';

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Graduation celebration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h1 className="text-white mb-8 text-4xl sm:text-5xl lg:text-6xl" style={{ fontWeight: 700, lineHeight: 1.1, maxWidth: '800px' }}>
          the way to become<br />a global intern.
        </h1>
        <Button
          size="lg"
          onClick={onContactClick}
          className="text-white"
          style={{ backgroundColor: '#ff6100' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e55700'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff6100'}
        >
          Contact Now
        </Button>
      </div>
    </section>
  );
}
