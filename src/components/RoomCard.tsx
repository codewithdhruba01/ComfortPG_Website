import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Users, Star, Calendar, Eye } from 'lucide-react';
import { Room } from '../types';
import { useTheme } from '../context/ThemeContext';

interface RoomCardProps {
  room: Room;
  index: number;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, index }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-xl ${
        isDark ? 'bg-gray-800' : 'bg-white'
      } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Availability Badge */}
        <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
          room.available
            ? 'bg-green-500 text-white'
            : 'bg-red-500 text-white'
        }`}>
          {room.available ? 'Available' : 'Occupied'}
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold">
          {room.category}
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 rounded-full">
          <span className="text-lg font-bold text-gray-900">₹{room.price.toLocaleString()}</span>
          <span className="text-sm text-gray-600">/month</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className={`text-xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          } line-clamp-1`}>
            {room.title}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className={`text-sm font-medium ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {room.rating}
            </span>
          </div>
        </div>

        <p className={`text-sm ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        } mb-4 line-clamp-2`}>
          {room.shortDescription}
        </p>

        {/* Details */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className={`w-4 h-4 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`} />
              <span className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {room.area}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className={`w-4 h-4 ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`} />
              <span className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {room.capacity} {room.capacity === 1 ? 'Person' : 'People'}
              </span>
            </div>
          </div>
          <span className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {room.reviews} reviews
          </span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {room.amenities.slice(0, 3).map((amenity, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 rounded-full text-xs ${
                isDark
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              {amenity}
            </span>
          ))}
          {room.amenities.length > 3 && (
            <span className={`px-2 py-1 rounded-full text-xs ${
              isDark
                ? 'bg-gray-700 text-gray-300'
                : 'bg-gray-100 text-gray-700'
            }`}>
              +{room.amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <Link
            to={`/room/${room.id}`}
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              isDark
                ? 'bg-gray-700 text-white hover:bg-gray-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm font-medium">Details</span>
          </Link>
          <button
            className={`flex-1 flex items-center justify-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
              room.available
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
            disabled={!room.available}
          >
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">
              {room.available ? 'Book Now' : 'Unavailable'}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RoomCard;