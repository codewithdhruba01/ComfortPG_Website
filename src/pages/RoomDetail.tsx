import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Users, 
  Calendar, 
  ShoppingCart,
  Wifi,
  Car,
  Coffee,
  Shield,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Phone,
  Mail
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { rooms } from '../data/rooms';

const RoomDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isDark } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const room = rooms.find(r => r.id === id);

  if (!room) {
    return (
      <div className={`min-h-screen pt-20 flex items-center justify-center ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        <div className="text-center">
          <h1 className={`text-2xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          } mb-4`}>
            Room not found
          </h1>
          <Link
            to="/rooms"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Rooms
          </Link>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const amenityIcons: { [key: string]: React.ReactNode } = {
    'WiFi': <Wifi className="w-5 h-5" />,
    'High-Speed WiFi': <Wifi className="w-5 h-5" />,
    'AC': <span className="text-lg">❄️</span>,
    'Fan': <span className="text-lg">🌀</span>,
    'Parking': <Car className="w-5 h-5" />,
    'Meals': <Coffee className="w-5 h-5" />,
    'Premium Meals': <Coffee className="w-5 h-5" />,
    'Security': <Shield className="w-5 h-5" />,
    'Laundry': <span className="text-lg">🧺</span>,
    'Cleaning': <span className="text-lg">🧹</span>,
    'Housekeeping': <span className="text-lg">🧹</span>,
  };

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/rooms"
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
              isDark
                ? 'bg-gray-800 text-white hover:bg-gray-700'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            } shadow-md`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Rooms</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {/* Main Image */}
            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
              <img
                src={room.images[currentImageIndex]}
                alt={`${room.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {room.images.length}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-6 gap-2">
              {room.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-16 rounded-lg overflow-hidden ${
                    index === currentImageIndex
                      ? 'ring-2 ring-blue-500'
                      : 'hover:opacity-80'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Room Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Title and Rating */}
            <div>
              <h1 className={`text-3xl lg:text-4xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-2`}>
                {room.title}
              </h1>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className={`text-lg font-semibold ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {room.rating}
                  </span>
                  <span className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    ({room.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className={`w-5 h-5 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`} />
                  <span className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {room.area}
                  </span>
                </div>
              </div>
            </div>

            {/* Price */}
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <div className="flex items-center justify-between">
                <div>
                  <span className={`text-3xl font-bold ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    ₹{room.price.toLocaleString()}
                  </span>
                  <span className={`text-lg ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    /month
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className={`w-5 h-5 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`} />
                  <span className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {room.capacity} {room.capacity === 1 ? 'Person' : 'People'}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className={`text-xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-3`}>
                Description
              </h2>
              <p className={`text-lg leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {room.fullDescription}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className={`text-xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-3`}>
                Amenities
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {(showAllAmenities ? room.amenities : room.amenities.slice(0, 6)).map((amenity, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      isDark ? 'bg-gray-800' : 'bg-gray-100'
                    }`}
                  >
                    <div className={`${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {amenityIcons[amenity] || <CheckCircle className="w-5 h-5" />}
                    </div>
                    <span className={`${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
              {room.amenities.length > 6 && (
                <button
                  onClick={() => setShowAllAmenities(!showAllAmenities)}
                  className={`mt-3 text-sm font-medium ${
                    isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  {showAllAmenities ? 'Show Less' : `Show ${room.amenities.length - 6} More`}
                </button>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-colors duration-200 ${
                  room.available
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-400 text-white cursor-not-allowed'
                }`}
                disabled={!room.available}
              >
                <Calendar className="w-5 h-5" />
                <span>{room.available ? 'Book Now' : 'Not Available'}</span>
              </button>
              
              <button
                className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-colors duration-200 ${
                  isDark
                    ? 'bg-gray-700 text-white hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Contact Info */}
            <div className={`p-4 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-gray-100'
            }`}>
              <h3 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-3`}>
                Need Help?
              </h3>
              <div className="space-y-2">
                <a
                  href="tel:+919876543210"
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                    isDark
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>+91 98765 43210</span>
                </a>
                <a
                  href="mailto:info@comfortpg.com"
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                    isDark
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Mail className="w-5 h-5 text-blue-600" />
                  <span>info@comfortpg.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;