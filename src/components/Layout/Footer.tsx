import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Footer: React.FC = () => {
  const { darkMode } = useApp();

  const footerLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Funding Information', href: '/funding' },
    { name: 'Partner with Us', href: '/partner' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/codewithdhruba01', color: 'hover:text-black' },
    { icon: Twitter, href: 'https://x.com/codewithdhruba', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://www.instagram.com/dhrubaraj_pati/#', color: 'hover:text-pink-600' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dhrubaraj-pati/', color: 'hover:text-blue-700' },
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-50'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Home className="w-6 h-6 text-white" />
              </div>
              <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                ComfortPG
              </span>
            </Link>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 max-w-md`}>
              Find the perfect paying guest accommodation with modern amenities, affordable prices, and a comfortable living experience.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} ${social.color} transition-colors duration-200`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'} uppercase tracking-wider mb-4`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-900'} uppercase tracking-wider mb-4`}>
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  info@comfortpg.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  +91 9999999999
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Kolkata, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className={`mt-8 pt-8 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2024 Dhrubaraj Pati. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className={`text-sm ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors duration-200`}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;