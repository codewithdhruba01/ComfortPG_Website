import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Twitter, Instagram, Github, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  const footerLinks = [
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Funding Information', path: '/funding' },
    { name: 'Partner Us', path: '/partner' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <footer className={`${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    } border-t ${isDark ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                isDark ? 'bg-blue-600' : 'bg-blue-500'
              }`}>
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                ComfortPG
              </span>
            </div>
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Your trusted partner for comfortable and affordable PG accommodations. 
              We provide safe, clean, and modern living spaces for students and professionals.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/dhrubaraj-pati/" className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
              }`}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/codewithdhruba" className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
              }`}>
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/dhrubaraj_pati/#" className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
              }`}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://github.com/codewithdhruba01" className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:text-gray-900'
              }`}>
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`text-sm transition-colors duration-200 ${
                      isDark
                        ? 'text-gray-400 hover:text-white'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className={`w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <span className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Newtown 18, Kolkata, WB 700135
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className={`w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <span className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  +91 98765 43210
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className={`w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`} />
                <span className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  info@comfortpg.com
                </span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className={`text-lg font-semibold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Newsletter
            </h3>
            <p className={`text-sm mb-4 ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Subscribe to get updates about new rooms and special offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className={`flex-1 px-3 py-2 text-sm rounded-l-lg border ${
                  isDark
                    ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-r-lg hover:bg-blue-700 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t ${
          isDark ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              © 2025 Dhrubaraj Pati. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                className={`text-sm transition-colors duration-200 ${
                  isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className={`text-sm transition-colors duration-200 ${
                  isDark
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;