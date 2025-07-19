import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Shield, Wifi, Car } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const HeroSection: React.FC = () => {
  const { darkMode } = useApp();

  const features = [
    { icon: Shield, text: 'Secure & Safe' },
    { icon: Wifi, text: 'High-Speed WiFi' },
    { icon: Car, text: 'Parking Available' },
    { icon: Star, text: 'Top Rated' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern Room"
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${darkMode ? 'bg-black/70' : 'bg-black/50'}`} />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block mt-2">
              PG Home
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Discover comfortable, affordable, and modern paying guest accommodations with all the amenities you need.
          </p>
        </div>


        {/* Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`${darkMode ? 'bg-gray-800/60' : 'bg-white/80'} backdrop-blur-md rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/rooms"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Explore Rooms
          </Link>
          <Link
            to="/about"
            className={`${darkMode ? 'bg-gray-800/80 text-white hover:bg-gray-700' : 'bg-white/80 text-gray-900 hover:bg-white'} px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 backdrop-blur-md border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;