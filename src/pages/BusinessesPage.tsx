import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ContactForm } from '../components/ContactForm';

export function BusinessesPage() {
  const contactFields = [
    { name: 'company', label: 'Company Name', type: 'text' as const, placeholder: 'Your company name' },
    { name: 'contact', label: 'Contact Person', type: 'text' as const, placeholder: 'Full name' },
    { name: 'email', label: 'Email', type: 'email' as const, placeholder: 'contact@company.com' },
    { name: 'message', label: 'Message', type: 'textarea' as const, placeholder: 'Tell us about your internship needs' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjAyOTYyMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professional office teamwork"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(255, 97, 0, 0.6)' }} />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-white">Hire Talented Interns Easily with Interny</h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              At Interny, we understand the challenges businesses face when searching for talented, motivated interns. 
              Our platform streamlines the entire process, connecting you with pre-vetted students from top academies 
              around the world who are eager to contribute to real projects.
            </p>
            <p className="text-gray-700 mt-4">
              Whether you're a startup looking for fresh perspectives or an established company seeking specialized 
              skills, Interny provides access to a diverse pool of candidates. Save time on recruitment, reduce hiring 
              costs, and discover the next generation of talent that can drive your business forward.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#fff3ed' }}>
                <h3 className="mb-2" style={{ color: '#ff6100' }}>Global Reach</h3>
                <p className="text-gray-700">Access students from academies worldwide</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#fff3ed' }}>
                <h3 className="mb-2" style={{ color: '#ff6100' }}>Quality Candidates</h3>
                <p className="text-gray-700">Pre-vetted and motivated students</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#fff3ed' }}>
                <h3 className="mb-2" style={{ color: '#ff6100' }}>Easy Process</h3>
                <p className="text-gray-700">Streamlined hiring and onboarding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-gray-900 mb-4">Connect with Us</h2>
            <p className="text-gray-600">Let's discuss how Interny can help your business find the perfect interns</p>
          </div>
          <ContactForm fields={contactFields} />
        </div>
      </section>
    </div>
  );
}
