import { Building2, GraduationCap, Users } from 'lucide-react';
import { Card } from './ui/card';

interface ServiceCardsProps {
  onNavigate: (page: string) => void;
}

export function ServiceCards({ onNavigate }: ServiceCardsProps) {
  const services = [
    {
      icon: Building2,
      title: 'For Businesses',
      description: 'Find talented interns for your company. Access a global pool of motivated students ready to contribute to your projects.',
      path: 'businesses',
    },
    {
      icon: GraduationCap,
      title: 'For Academies',
      description: 'Connect your students to real projects and companies. Bridge the gap between education and professional experience.',
      path: 'academies',
    },
    {
      icon: Users,
      title: 'For Students',
      description: 'Find your next internship and build global experience. Start your career journey with meaningful opportunities worldwide.',
      path: 'students',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-gray-900 mb-12 text-[32px] font-bold">Who We Work With</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-shadow cursor-pointer border-gray-200"
                onClick={() => onNavigate(service.path)}
              >
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-6" style={{ backgroundColor: '#fff3ed' }}>
                  <Icon style={{ color: '#ff6100' }} size={32} />
                </div>
                <h3 className="text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
