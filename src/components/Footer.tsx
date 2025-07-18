import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/bhrigu-removebg-preview.png" 
                alt="Bhrigu" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Engineering Intelligence. Empowering Compliance. Redefining how regulated industries embrace Industry 4.0/5.0.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#1B9AAA] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#1B9AAA] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#1B9AAA] transition-colors">
                <Globe size={20} />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#1B9AAA] transition-colors">BhriguOne Platform</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#1B9AAA] transition-colors">Manufacturing Execution</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#1B9AAA] transition-colors">Laboratory Management</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#1B9AAA] transition-colors">Quality Management</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-[#1B9AAA] transition-colors">Regulatory Compliance</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Industries</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/industries" className="text-gray-400 hover:text-[#1B9AAA] transition-colors">Pharmaceuticals</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-[#1B9AAA] transition-colors">Medical Devices</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-[#1B9AAA] transition-colors">Food & Beverage</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-[#1B9AAA] transition-colors">Biotech</Link></li>
              <li><Link to="/industries" className="text-gray-400 hover:text-[#1B9AAA] transition-colors">Nutraceuticals</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#1B9AAA]" />
                <span className="text-gray-400">info@bhrigu.tech</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#1B9AAA]" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-[#1B9AAA]" />
                <span className="text-gray-400">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2024 Bhrigu.tech. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};