import { Globe, Heart, Users, TrendingUp } from 'lucide-react';
import partnershipImage from 'figma:asset/f30b9ce8159d8dd947280bf832844116eed30fa9.png';

export function AboutPage() {
  const values = [
    {
      icon: Globe,
      title: 'Global Connection',
      description: 'Breaking down borders to create worldwide opportunities for everyone.',
    },
    {
      icon: Heart,
      title: 'Student-Centered',
      description: 'Putting students first and empowering them to reach their full potential.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building strong relationships between students, academies, and businesses.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Fostering professional development and continuous learning.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={partnershipImage}
            alt="Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 97, 0, 0.6)' }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-white">About Interny</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700">
              Interny connects students, academies, and businesses to create meaningful internship experiences 
              worldwide. Our mission is to make global internships accessible to everyone, bridging the gap 
              between education and professional success.
            </p>
          </div>

          {/* History */}
          <div className="rounded-lg p-8 mb-12" style={{ backgroundColor: '#fff3ed' }}>
            <h3 className="mb-4" style={{ color: '#ff6100' }}>Our Story</h3>
            <p className="text-gray-700">
              Founded in 2023, Interny was born from a simple vision: to create a world where talented students 
              can easily access meaningful internship opportunities, regardless of geographic boundaries. We bridge 
              education and real-world experience through partnerships with academies and companies around the globe, 
              fostering connections that transform careers and businesses alike.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-gray-900 mb-12 text-[32px] font-bold">Our Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#fff3ed' }}>
                    <Icon style={{ color: '#ff6100' }} size={32} />
                  </div>
                  <h3 className="text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="mb-2" style={{ color: '#ff6100' }}>500+</div>
              <p className="text-gray-700">Partner Companies</p>
            </div>
            <div>
              <div className="mb-2" style={{ color: '#ff6100' }}>100+</div>
              <p className="text-gray-700">Partner Academies</p>
            </div>
            <div>
              <div className="mb-2" style={{ color: '#ff6100' }}>5,000+</div>
              <p className="text-gray-700">Student Placements</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
