import { useRef } from 'react';
import { Hero } from '../components/Hero';
import { ServiceCards } from '../components/ServiceCards';
import { PartnersCarousel } from '../components/PartnersCarousel';
import { ContactForm } from '../components/ContactForm';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const contactFields = [
    { name: 'name', label: 'Name', type: 'text' as const, placeholder: 'Your name' },
    { name: 'email', label: 'Email', type: 'email' as const, placeholder: 'your@email.com' },
    { name: 'message', label: 'Message', type: 'textarea' as const, placeholder: 'How can we help you?' },
  ];

  return (
    <div>
      <Hero onContactClick={scrollToContact} />
      <ServiceCards onNavigate={onNavigate} />
      <PartnersCarousel />
      
      <section id="contact-form" ref={contactRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Get in Touch with the Interny Team</h2>
            <p className="text-gray-600">Have questions? We'd love to hear from you.</p>
          </div>
          <ContactForm fields={contactFields} />
        </div>
      </section>
    </div>
  );
}
