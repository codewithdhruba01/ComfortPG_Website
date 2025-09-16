import React from 'react';
import { Shield, Wifi, Car, Utensils, Zap, Users, Clock, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';

const FeaturesSection: React.FC = () => {
  const { darkMode } = useApp();

  const features = [
    {
      icon: Shield,
      title: 'Security & Safety',
      description: '24/7 security with CCTV surveillance and secure access controls',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Unlimited high-speed WiFi connectivity in all rooms',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Car,
      title: 'Parking Facility',
      description: 'Secure parking space available for two-wheelers and cars',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Utensils,
      title: 'Meals Included',
      description: 'Nutritious homemade meals - breakfast, lunch, and dinner',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Power Backup',
      description: '24/7 power backup to ensure uninterrupted electricity',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Community Living',
      description: 'Connect with like-minded professionals and students',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'No strict timing restrictions - come and go as you please',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: MapPin,
      title: 'Prime Locations',
      description: 'Strategically located near metro stations and business hubs',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold font-synonym ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Why Choose Our
            <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent block mt-2 font-excon">
              PG Accommodations?
            </span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto font-satoshi`}>
            We provide modern amenities, comfortable living spaces, and a safe environment for professionals and students.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-2xl border hover:shadow-2xl transition-all duration-300 group hover:transform hover:scale-105`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-xl font-synonym font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                  {feature.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-satoshi`}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;