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

  const colors = [
    "from-purple-500 to-indigo-500",  // Secure & Safe
    "from-pink-500 to-red-400",      // High-Speed WiFi
    "from-blue-500 to-cyan-400",     // Parking Available
    "from-yellow-500 to-orange-400", // Top Rated
  ];

  const animations = [
    "animate-bounce",     // Secure & Safe
    "animate-pulse",      // High-Speed WiFi
    "animate-spin-slow",  // Parking Available
    "animate-float",      // Top Rated
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${darkMode ? 'bg-black/10' : 'bg-black/50'}`} />
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-excon">
            Find Your Perfect
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent block mt-2">
              PG Home
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto font-switzer">
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
                className={`${darkMode ? "bg-gray-800/60" : "bg-white/80"} 
                  backdrop-blur-md rounded-xl p-6 text-center 
                  transition-all duration-300 
                  hover:scale-110 hover:shadow-2xl`}
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${colors[index]} 
                  rounded-2xl flex items-center justify-center mx-auto mb-3 
                  text-white shadow-lg ${animations[index]}`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <span
                  className={`text-sm font-switzer ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="flex flex-col items-center gap-6">
  {/* Tag above buttons */}
  <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-medium font-synonym
    rounded-full bg-gradient-to-r from-green-800 to-green-700 
    text-white shadow-md">
    {/* Green blinking light */}
    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
    <span className="w-2 h-2 rounded-full bg-green-500 absolute"></span>
    24/7 Available Support
  </span>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Primary CTA */}
            <Link
              to="/rooms"
              className="relative inline-flex items-center justify-center px-8 py-4 
                text-white text-lg font-semibold rounded-full 
                bg-gradient-to-r from-purple-600 to-pink-600 
                shadow-lg shadow-purple-500/30 
                transition-all duration-300 
                hover:scale-110 hover:shadow-2xl 
                overflow-hidden group"
            >
              <span className="relative z-10">Explore Rooms</span>
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></span>
            </Link>

            {/* Secondary CTA */}
            <Link
              to="/about"
              className="relative inline-flex items-center justify-center px-8 py-4 
                text-lg font-semibold rounded-full 
                backdrop-blur-md border 
                border-transparent 
                bg-white/10 text-white 
                shadow-md transition-all duration-300 
                hover:scale-110 hover:shadow-xl 
                hover:border-purple-400/70"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;