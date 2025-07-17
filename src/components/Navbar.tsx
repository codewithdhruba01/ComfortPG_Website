import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Building, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/',},
    { name: 'Rooms', path: '/rooms'},
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact'},
    { name: 'Partner Us', path: '/partner'},
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isDark ? 'bg-gray-900/30 backdrop-blur-md' : 'bg-white/60	 backdrop-blur-md'
    } border-b ${isDark ? 'border-gray-900/30' : 'border-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
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
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? isDark
                      ? 'text-blue-400'
                      : 'text-blue-600'
                    : isDark
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                
                <span>{item.name}</span>
                {isActive(item.path) && (
                  <motion.div
                    layoutId="activeTab"
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      isDark ? 'bg-blue-400' : 'bg-blue-600'
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Theme Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden ${
            isDark ? 'border-gray-800' : 'border-gray-200'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? isDark
                      ? 'bg-blue-900 text-blue-400'
                      : 'bg-blue-50 text-blue-600'
                    : isDark
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;