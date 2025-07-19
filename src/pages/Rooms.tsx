import React, { useState, useMemo } from 'react';
import SearchBar from '../components/Rooms/SearchBar';
import CategoryFilter from '../components/Rooms/CategoryFilter';
import RoomCard from '../components/Rooms/RoomCard';
import { rooms } from '../data/rooms';
import { useApp } from '../context/AppContext';

const Rooms: React.FC = () => {
  const { darkMode } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filters, setFilters] = useState({
    priceRange: [0, 20000],
    roomType: '',
    amenities: [],
  });

  const filteredRooms = useMemo(() => {
    let filtered = rooms;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(room => room.category === selectedCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(room =>
        room.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        room.amenities.some(amenity => amenity.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Price filter
    filtered = filtered.filter(room => 
      room.price >= filters.priceRange[0] && room.price <= filters.priceRange[1]
    );

    // Room type filter
    if (filters.roomType) {
      filtered = filtered.filter(room => room.type === filters.roomType);
    }

    // Amenities filter
    if (filters.amenities.length > 0) {
      filtered = filtered.filter(room =>
        filters.amenities.every(amenity => room.amenities.includes(amenity))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory, filters]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Find Your Perfect
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
              Room
            </span>
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Browse through our collection of comfortable and affordable PG accommodations.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={setSearchQuery} onFilterChange={setFilters} />
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />

        {/* Results */}
        <div className="mb-8">
          <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            {filteredRooms.length} Room{filteredRooms.length !== 1 ? 's' : ''} Found
          </h2>
          
          {filteredRooms.length === 0 ? (
            <div className={`text-center py-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              <p className="text-xl mb-4">No rooms found matching your criteria.</p>
              <p>Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRooms.map(room => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;