import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import kalimahlogo from '../assets/kalimah-logo.png';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'SAMPLE PRODUCTS', path: '/products' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
            <img src={kalimahlogo} alt="kalimah Logo" className="h-20 w-auto" />
            </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold tracking-wide transition-colors duration-300 hover:text-sage ${
                  location.pathname === item.path ? 'text-sage' : 'text-[#]'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="btn-primary text-sm">
              INQUIRE
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white/95 backdrop-blur-md rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-sage ${
                    location.pathname === item.path ? 'text-sage' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary text-sm w-full">
                INQUIRE
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;