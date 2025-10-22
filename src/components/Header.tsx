import { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logoImage from 'figma:asset/23fc83bd2963ea1654d8216fcbd9c8fdb32f33cb.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Businesses', path: 'businesses' },
    { name: 'Academies', path: 'academies' },
    { name: 'Students', path: 'students' },
    { name: 'About Us', path: 'about' },
  ];

  const handleContactClick = () => {
    if (currentPage !== 'home') {
      onNavigate('home');
    }
    setTimeout(() => {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src={logoImage} alt="Interny Logo" className="w-10 h-10" />
            <span style={{ color: '#ff6100' }}>Interny</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`transition-colors ${
                  currentPage === item.path
                    ? ''
                    : 'text-gray-700'
                }`}
                style={currentPage === item.path ? { color: '#ff6100' } : {}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#ff6100'}
                onMouseLeave={(e) => {
                  if (currentPage !== item.path) {
                    e.currentTarget.style.color = '';
                  }
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <Button 
              onClick={handleContactClick}
              className="text-white" 
              style={{ backgroundColor: '#ff6100' }} 
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e55700'} 
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff6100'}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left ${
                    currentPage === item.path
                      ? ''
                      : 'text-gray-700'
                  }`}
                  style={currentPage === item.path ? { color: '#ff6100' } : {}}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Button 
                  onClick={() => {
                    handleContactClick();
                    setMobileMenuOpen(false);
                  }}
                  className="text-white w-full" 
                  style={{ backgroundColor: '#ff6100' }}
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
