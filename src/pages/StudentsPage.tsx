import { ContactForm } from '../components/ContactForm';
import studentsHeroImage from 'figma:asset/3b38ccae38daace389f2f107c8af4c19f1cf69a0.png';

export function StudentsPage() {
  const contactFields = [
    { name: 'name', label: 'Full Name', type: 'text' as const, placeholder: 'Your full name' },
    { name: 'email', label: 'Email', type: 'email' as const, placeholder: 'your@email.com' },
    { name: 'field', label: 'Field of Study', type: 'text' as const, placeholder: 'e.g., Computer Science, Business, Design' },
    { name: 'message', label: 'Message', type: 'textarea' as const, placeholder: 'Tell us about your interests and career goals' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={studentsHeroImage}
            alt="Students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 97, 0, 0.6)' }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-white">Start Your Global Internship Journey</h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              Launch your career with Interny, where ambitious students like you discover internship opportunities 
              that go beyond the ordinary. Our platform connects you with forward-thinking companies around the world, 
              giving you the chance to gain hands-on experience, build your professional network, and make a real 
              impact from day one.
            </p>
            <p className="text-gray-700 mt-4">
              Whether you're seeking your first internship or looking to expand your experience internationally, 
              Interny provides the tools and connections you need to succeed. Browse opportunities matched to your 
              skills and interests, apply with confidence, and take the first step toward building the career you've 
              always imagined. The world is waiting for your talent.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#fff3ed' }}>
                <h3 className="mb-2" style={{ color: '#ff6100' }}>Global Opportunities</h3>
                <p className="text-gray-700">Access internships worldwide</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#fff3ed' }}>
                <h3 className="mb-2" style={{ color: '#ff6100' }}>Real Experience</h3>
                <p className="text-gray-700">Work on meaningful projects</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#fff3ed' }}>
                <h3 className="mb-2" style={{ color: '#ff6100' }}>Career Growth</h3>
                <p className="text-gray-700">Build skills and connections</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Get Started</h2>
            <p className="text-gray-600">Tell us about yourself and let's find the perfect internship for you</p>
          </div>
          <ContactForm fields={contactFields} />
        </div>
      </section>
    </div>
  );
}
