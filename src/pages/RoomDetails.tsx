import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Users, 
  Calendar, 
  ShoppingCart, 
  Heart,
  Wifi,
  Car,
  Utensils,
  Shield,
  Zap,
  Clock,
  CheckCircle
} from 'lucide-react';
import { rooms } from '../data/rooms';
import { useApp } from '../context/AppContext';

const RoomDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { darkMode, addToCart } = useApp();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const room = rooms.find(r => r.id === id);

  if (!room) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} flex items-center justify-center`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Room not found
          </h1>
          <Link to="/rooms" className="text-purple-600 hover:text-purple-700">
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  const amenityIcons = {
    'Wi-Fi': Wifi,
    'AC': Zap,
    'Parking': Car,
    'Meals': Utensils,
    'Security': Shield,
    'Flexible Timing': Clock,
    'Attached Bathroom': CheckCircle,
    'Study Table': CheckCircle,
    'Wardrobe': CheckCircle,
    'Laundry': CheckCircle,
    'Housekeeping': CheckCircle,
    'Balcony': CheckCircle,
  };

  const handleAddToCart = () => {
    const checkIn = checkInDate || new Date().toISOString().split('T')[0];
    const checkOut = checkOutDate || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
    addToCart(room, checkIn, checkOut);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/rooms"
          className={`inline-flex items-center space-x-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} mb-8 transition-colors`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Rooms</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="mb-4">
              <img
                src={room.images[selectedImageIndex]}
                alt={room.name}
                className="w-full h-96 object-cover rounded-2xl"
              />
            </div>
            <div className="grid grid-cols-6 gap-2">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative overflow-hidden rounded-lg ${
                    selectedImageIndex === index ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${room.name} ${index + 1}`}
                    className="w-full h-16 object-cover hover:scale-110 transition-transform duration-200"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {room.name}
                </h1>
                <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}>
                  <Heart className={`w-6 h-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                </button>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className={`font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {room.rating}
                  </span>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    ({room.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Prime Location
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <Users className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {room.type} Occupancy
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {room.size}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  ₹{room.price.toLocaleString()}
                </span>
                <span className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  /month
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Description
              </h2>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
                {room.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Amenities
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {room.amenities.map((amenity, index) => {
                  const Icon = amenityIcons[amenity as keyof typeof amenityIcons] || CheckCircle;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon className="w-5 h-5 text-green-500" />
                      <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {amenity}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Booking Section */}
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border p-6`}>
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
                Book This Room
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    }`}
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>
                <Link
                  to="/payment"
                  className={`flex-1 ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} py-3 rounded-xl font-semibold transition-colors text-center`}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;