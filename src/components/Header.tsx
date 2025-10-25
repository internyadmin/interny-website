import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/23fc83bd2963ea1654d8216fcbd9c8fdb32f33cb.png';

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Businesses', path: '/businesses' },
    { name: 'Academies', path: '/academies' },
    { name: 'Students', path: '/students' },
    { name: 'About Us', path: '/about' },
  ];

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      // navigate to home first
      window.location.href = '/';
      setTimeout(() => {
        const contactSection = document.getElementById('contact-form');
        if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logoImage} alt="Interny Logo" className="w-10 h-10" />
            <span style={{ color: '#ff6100' }}>Interny</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <Link
                key={item.path}
                to={item.path}
                className="transition-colors"
                style={{
                  color: location.pathname === item.path ? '#ff6100' : 'gray',
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={handleContactClick}
              className="text-white"
              style={{ backgroundColor: '#ff6100' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#e55700')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#ff6100')}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: location.pathname === item.path ? '#ff6100' : 'gray',
                  }}
                >
                  {item.name}
                </Link>
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
