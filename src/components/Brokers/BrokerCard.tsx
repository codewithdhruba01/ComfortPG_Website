import React from 'react';
import { Star, MapPin, Clock, MessageCircle, Phone, Mail, CheckCircle, Users } from 'lucide-react';
import { Broker } from '../../types';
import { useApp } from '../../context/AppContext';

interface BrokerCardProps {
  broker: Broker;
  onChat: (broker: Broker) => void;
}

const BrokerCard: React.FC<BrokerCardProps> = ({ broker, onChat }) => {
  const { darkMode } = useApp();

  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border overflow-hidden hover:shadow-2xl transition-all duration-300 group`}>
      {/* Header */}
      <div className="relative p-6 pb-4">
        <div className="flex items-start space-x-4">
          <div className="relative">
            <img
              src={broker.image}
              alt={broker.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {broker.verified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {broker.name}
              </h3>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {broker.rating}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <MapPin className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {broker.area}, {broker.city}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {broker.responseTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className={`px-6 py-4 border-t border-b ${darkMode ? 'border-gray-700 bg-gray-700/30' : 'border-gray-100 bg-gray-50'}`}>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {broker.experience}
            </div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Years Exp.
            </div>
          </div>
          <div>
            <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {broker.properties}
            </div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Properties
            </div>
          </div>
          <div>
            <div className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {broker.reviews}
            </div>
            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Reviews
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Specialties */}
        <div className="mb-4">
          <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            Specialties
          </h4>
          <div className="flex flex-wrap gap-2">
            {broker.specialties.slice(0, 3).map((specialty, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
          {broker.description}
        </p>

        {/* Languages */}
        <div className="mb-6">
          <h4 className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
            Languages
          </h4>
          <div className="flex flex-wrap gap-1">
            {broker.languages.map((language, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}
              >
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={() => onChat(broker)}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat</span>
          </button>
          <a
            href={`tel:${broker.phone}`}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${broker.email}`}
            className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'} transition-colors`}
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrokerCard;