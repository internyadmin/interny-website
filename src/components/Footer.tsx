import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Twitter } from 'lucide-react';
import logoImage from '../assets/23fc83bd2963ea1654d8216fcbd9c8fdb32f33cb.png';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={logoImage} alt="Interny Logo" className="w-8 h-8" />
              <span style={{ color: '#ff6100' }}>Interny</span>
            </div>
            <p className="text-gray-600 text-sm">
              72 Chase Side, Suite 2, Polipost Business Centre, London, UK
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-orange-500">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-orange-500">About Us</Link></li>
              <li><Link to="/" className="text-gray-600 hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="mb-4 text-gray-900">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/internyofficial" className="w-10 h-10 bg-white border rounded flex items-center justify-center hover:border-orange-500 hover:bg-orange-50">
                <Linkedin size={20} className="text-gray-600" />
              </a>
              <a href="https://instagram.com/internyofficial" className="w-10 h-10 bg-white border rounded flex items-center justify-center hover:border-orange-500 hover:bg-orange-50">
                <Instagram size={20} className="text-gray-600" />
              </a>
              <a href="https://x.com/internyofficial" className="w-10 h-10 bg-white border rounded flex items-center justify-center hover:border-orange-500 hover:bg-orange-50">
                <Twitter size={20} className="text-gray-600" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
