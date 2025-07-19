import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Star, Wifi, Car, Utensils, ShoppingCart, Eye } from 'lucide-react';
import { Room } from '../../types';
import { useApp } from '../../context/AppContext';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  const { darkMode, addToCart } = useApp();

  const handleAddToCart = () => {
    const checkIn = new Date().toISOString().split('T')[0];
    const checkOut = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    addToCart(room, checkIn, checkOut);
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border overflow-hidden hover:shadow-2xl transition-all duration-300 group`}>
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            room.category === 'luxury' ? 'bg-purple-500 text-white' :
            room.category === 'premium' ? 'bg-blue-500 text-white' :
            room.category === 'standard' ? 'bg-green-500 text-white' :
            'bg-orange-500 text-white'
          }`}>
            {room.category.charAt(0).toUpperCase() + room.category.slice(1)}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-900">{room.rating}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {room.name}
          </h3>
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {room.size}
          </span>
        </div>

        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            <Users className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              {room.type}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Prime Location
            </span>
          </div>
        </div>

        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-2`}>
          {room.description}
        </p>

        {/* Amenities */}
        <div className="flex items-center space-x-3 mb-4">
          <Wifi className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <Car className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <Utensils className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            +{room.amenities.length - 3} more
          </span>
        </div>

        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div>
            <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              ₹{room.price.toLocaleString()}
            </span>
            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              /month
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleAddToCart}
              className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
            <Link
              to={`/room/${room.id}`}
              className={`px-4 py-2 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'} rounded-lg transition-colors flex items-center space-x-2`}
            >
              <Eye className="w-4 h-4" />
              <span>Details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;