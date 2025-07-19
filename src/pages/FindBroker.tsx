import React, { useState, useMemo } from 'react';
import { Search, MapPin, Filter, Users, Star } from 'lucide-react';
import BrokerCard from '../components/Brokers/BrokerCard';
import ChatModal from '../components/Brokers/ChatModal';
import { brokers } from '../data/brokers';
import { Broker } from '../types';
import { useApp } from '../context/AppContext';

const FindBroker: React.FC = () => {
  const { darkMode } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBroker, setSelectedBroker] = useState<Broker | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minRating: 0,
    verified: false,
    minExperience: 0,
    specialty: ''
  });

  const cities = [...new Set(brokers.map(broker => broker.city))];
  const specialties = [...new Set(brokers.flatMap(broker => broker.specialties))];

  const filteredBrokers = useMemo(() => {
    let filtered = brokers;

    // Search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(broker =>
        broker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        broker.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        broker.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
        broker.specialties.some(specialty => 
          specialty.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }

    // City filter
    if (selectedCity) {
      filtered = filtered.filter(broker => broker.city === selectedCity);
    }

    // Rating filter
    if (filters.minRating > 0) {
      filtered = filtered.filter(broker => broker.rating >= filters.minRating);
    }

    // Verified filter
    if (filters.verified) {
      filtered = filtered.filter(broker => broker.verified);
    }

    // Experience filter
    if (filters.minExperience > 0) {
      filtered = filtered.filter(broker => broker.experience >= filters.minExperience);
    }

    // Specialty filter
    if (filters.specialty) {
      filtered = filtered.filter(broker => 
        broker.specialties.includes(filters.specialty)
      );
    }

    return filtered.sort((a, b) => b.rating - a.rating);
  }, [searchQuery, selectedCity, filters]);

  const handleChatWithBroker = (broker: Broker) => {
    setSelectedBroker(broker);
    setIsChatOpen(true);
  };

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            Find Your Perfect
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
              PG Broker
            </span>
          </h1>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Connect with verified brokers in your city and find the best PG accommodations with expert guidance.
          </p>
        </div>

        {/* Search Section */}
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border p-6 shadow-lg mb-8`}>
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 flex items-center space-x-3">
              <Search className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <input
                type="text"
                placeholder="Search by broker name, city, area, or specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`flex-1 px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-purple-500 ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-50 text-gray-900 placeholder-gray-500'}`}
              />
            </div>
            <div className="flex items-center space-x-3">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className={`px-4 py-3 rounded-xl border-0 focus:ring-2 focus:ring-purple-500 ${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-50 text-gray-900'}`}
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`px-4 py-3 rounded-xl border transition-colors flex items-center space-x-2 ${
                  darkMode 
                    ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Filter className="w-4 h-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-6`}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                    Minimum Rating
                  </label>
                  <select
                    value={filters.minRating}
                    onChange={(e) => handleFilterChange('minRating', parseFloat(e.target.value))}
                    className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    }`}
                  >
                    <option value={0}>Any Rating</option>
                    <option value={4.5}>4.5+ Stars</option>
                    <option value={4.0}>4.0+ Stars</option>
                    <option value={3.5}>3.5+ Stars</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                    Experience
                  </label>
                  <select
                    value={filters.minExperience}
                    onChange={(e) => handleFilterChange('minExperience', parseInt(e.target.value))}
                    className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    }`}
                  >
                    <option value={0}>Any Experience</option>
                    <option value={5}>5+ Years</option>
                    <option value={3}>3+ Years</option>
                    <option value={1}>1+ Years</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                    Specialty
                  </label>
                  <select
                    value={filters.specialty}
                    onChange={(e) => handleFilterChange('specialty', e.target.value)}
                    className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    }`}
                  >
                    <option value="">All Specialties</option>
                    {specialties.map(specialty => (
                      <option key={specialty} value={specialty}>{specialty}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.verified}
                      onChange={(e) => handleFilterChange('verified', e.target.checked)}
                      className="rounded text-purple-600 focus:ring-purple-500"
                    />
                    <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Verified Only
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {filteredBrokers.length} Broker{filteredBrokers.length !== 1 ? 's' : ''} Found
          </h2>
          <div className="flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Users className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {brokers.length} Total Brokers
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className={`w-4 h-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Avg Rating: {(brokers.reduce((sum, b) => sum + b.rating, 0) / brokers.length).toFixed(1)}
              </span>
            </div>
          </div>
        </div>

        {/* Brokers Grid */}
        {filteredBrokers.length === 0 ? (
          <div className={`text-center py-16 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
            <p className="text-xl mb-4">No brokers found matching your criteria.</p>
            <p>Try adjusting your filters or search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBrokers.map(broker => (
              <BrokerCard
                key={broker.id}
                broker={broker}
                onChat={handleChatWithBroker}
              />
            ))}
          </div>
        )}

        {/* Chat Modal */}
        {selectedBroker && (
          <ChatModal
            broker={selectedBroker}
            isOpen={isChatOpen}
            onClose={() => {
              setIsChatOpen(false);
              setSelectedBroker(null);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default FindBroker;