import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Industries', path: '/industries' },
    { name: 'Technology', path: '/technology' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled || !isHomePage 
        ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/bhrigu-removebg-preview.png" 
              alt="Bhrigu" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-[#1B9AAA] ${
                  location.pathname === item.path 
                    ? 'text-[#1B9AAA]' 
                    : scrolled || !isHomePage 
                      ? 'text-gray-700' 
                      : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#1B9AAA]/25 transition-all duration-200 transform hover:scale-105">
              Get Demo
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X size={24} className={scrolled || !isHomePage ? 'text-gray-700' : 'text-white'} />
            ) : (
              <Menu size={24} className={scrolled || !isHomePage ? 'text-gray-700' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 hover:text-[#1B9AAA] ${
                  location.pathname === item.path ? 'text-[#1B9AAA]' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 py-2">
              <button className="w-full bg-gradient-to-r from-[#1B9AAA] to-[#06D6A0] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-200">
                Get Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};