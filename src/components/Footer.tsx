import { Linkedin, Instagram, Twitter } from 'lucide-react';
import logoImage from 'figma:asset/23fc83bd2963ea1654d8216fcbd9c8fdb32f33cb.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoImage} alt="Interny Logo" className="w-8 h-8" />
              <span style={{ color: '#ff6100' }}>Interny</span>
            </div>
            <p className="text-gray-600 text-sm">
              72 Chase Side, Suite 2, Polipost Business Centre, London, United Kingdom, N14 5PH
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-600 text-sm transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ff6100'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-gray-600 text-sm transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ff6100'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-600 text-sm transition-colors"
                  onMouseEnter={(e) => e.currentTarget.style.color = '#ff6100'}
                  onMouseLeave={(e) => e.currentTarget.style.color = ''}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff3ed';
                  e.currentTarget.style.borderColor = '#ff6100';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <Linkedin size={20} className="text-gray-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff3ed';
                  e.currentTarget.style.borderColor = '#ff6100';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <Instagram size={20} className="text-gray-600" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fff3ed';
                  e.currentTarget.style.borderColor = '#ff6100';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '';
                  e.currentTarget.style.borderColor = '';
                }}
              >
                <Twitter size={20} className="text-gray-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Interny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
