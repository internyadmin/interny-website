import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactForm } from '../components/ContactForm';

export function AcademiesPage() {
  const contactFields = [
    { name: 'academy', label: 'Academy Name', type: 'text' as const, placeholder: 'Your institution name' },
    { name: 'contact', label: 'Contact Person', type: 'text' as const, placeholder: 'Full name' },
    { name: 'email', label: 'Email', type: 'email' as const, placeholder: 'contact@academy.edu' },
    { name: 'message', label: 'Message', type: 'textarea' as const, placeholder: 'Tell us about your students and partnership goals' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1706016899218-ebe36844f70e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYwMTgzMzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="University campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 97, 0, 0.6)' }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-white">Empower Your Students Through Real Internship Opportunities</h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              Partner with Interny to bridge the gap between classroom learning and real-world professional experience. 
              Our platform connects your students with businesses and organizations worldwide, providing them with 
              meaningful internship opportunities that enhance their education and career prospects.
            </p>
            <p className="text-gray-700 mt-4">
              By collaborating with Interny, your academy gains access to a global network of companies actively 
              seeking talented students. We handle the logistics of matching students with suitable opportunities, 
              allowing you to focus on what matters most: educating and supporting your students. Together, we can 
              prepare the next generation of professionals for success in the global marketplace.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#fff3ed' }}>
                <h3 className="mb-2" style={{ color: '#ff6100' }}>Student Success</h3>
                <p className="text-gray-700">Enhance graduate employability and outcomes</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#fff3ed' }}>
                <h3 className="mb-2" style={{ color: '#ff6100' }}>Global Network</h3>
                <p className="text-gray-700">Connect with international businesses</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#fff3ed' }}>
                <h3 className="mb-2" style={{ color: '#ff6100' }}>Easy Management</h3>
                <p className="text-gray-700">Simplified placement and tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Partner with Interny</h2>
            <p className="text-gray-600">Let's discuss how we can support your students' career development</p>
          </div>
          <ContactForm fields={contactFields} />
        </div>
      </section>
    </div>
  );
}
