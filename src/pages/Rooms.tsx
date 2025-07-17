import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { rooms, categories } from '../data/rooms';
import RoomCard from '../components/RoomCard';

const Rooms: React.FC = () => {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredRooms = useMemo(() => {
    return rooms.filter(room => {
      const matchesSearch = room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           room.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           room.area.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || room.category === selectedCategory;
      const matchesPrice = room.price >= priceRange[0] && room.price <= priceRange[1];
      
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchTerm, selectedCategory, priceRange]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setPriceRange([0, 50000]);
  };

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl sm:text-5xl font-bold ${
            isDark ? 'text-white' : 'text-gray-900'
          } mb-4`}>
            Find Your Perfect Room
          </h1>
          <p className={`text-xl ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          } max-w-2xl mx-auto`}>
            Discover comfortable and affordable accommodation options tailored to your needs.
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-lg p-6 mb-8`}
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
              isDark ? 'text-gray-400' : 'text-gray-500'
            } w-5 h-5`} />
            <input
              type="text"
              placeholder="Search rooms by title, description, or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isDark
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>

          {/* Filter Toggle */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? 'bg-gray-700 text-white hover:bg-gray-600'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span>Filters</span>
            </button>
            
            {(selectedCategory || searchTerm || priceRange[0] > 0 || priceRange[1] < 50000) && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
            <button
              onClick={() => setSelectedCategory('')}
              className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                selectedCategory === ''
                  ? 'bg-blue-600 text-white'
                  : isDark
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="text-sm font-medium">All Rooms</span>
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : isDark
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'} pt-6`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Price Range */}
                <div>
                  <label className={`block text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  } mb-2`}>
                    Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                  </label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-full"
                    />
                    <input
                      type="range"
                      min="0"
                      max="50000"
                      step="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Additional filters can be added here */}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className={`text-sm ${
            isDark ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Found {filteredRooms.length} {filteredRooms.length === 1 ? 'room' : 'rooms'}
          </p>
        </motion.div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredRooms.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-center py-16 ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } rounded-xl shadow-lg`}
          >
            <div className={`text-6xl mb-4 ${
              isDark ? 'text-gray-600' : 'text-gray-400'
            }`}>
              🔍
            </div>
            <h3 className={`text-xl font-semibold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-2`}>
              No rooms found
            </h3>
            <p className={`${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } mb-4`}>
              Try adjusting your search criteria or filters
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Rooms;