import React from 'react';
import { Users, Home, Star, Calendar } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const StatsSection: React.FC = () => {
  const { darkMode } = useApp();

  const stats = [
    {
      icon: Users,
      value: '5000+',
      label: 'Happy Residents',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Home,
      value: '200+',
      label: 'Available Rooms',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      value: '4.8',
      label: 'Average Rating',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Calendar,
      value: '3+',
      label: 'Years Experience',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Numbers That
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
              Speak for Themselves
            </span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            We've built a community of satisfied residents who trust us with their accommodation needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm p-8 rounded-2xl text-center group hover:transform hover:scale-105 transition-all duration-300 border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <div className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                  {stat.value}
                </div>
                <div className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;