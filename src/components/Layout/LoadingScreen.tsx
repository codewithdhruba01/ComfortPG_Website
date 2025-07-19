import React from 'react';
import { Home } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo with Animation */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce">
            <Home className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            ComfortPG
          </h1>
          <p className="text-purple-200 text-lg">
            Find Your Perfect Home
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-400"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
        </div>

        <p className="text-purple-200 mt-4 text-sm">
          Loading amazing PG accommodations...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;