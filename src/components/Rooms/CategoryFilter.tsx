import React from 'react';
import { useApp } from '../../context/AppContext';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onCategoryChange }) => {
  const { darkMode } = useApp();

  const categories = [
    { id: 'all', name: 'All Rooms', color: 'from-gray-500 to-gray-600' },
    { id: 'budget', name: 'Budget', color: 'from-green-500 to-emerald-500' },
    { id: 'standard', name: 'Standard', color: 'from-blue-500 to-cyan-500' },
    { id: 'luxury', name: 'Luxury', color: 'from-purple-500 to-pink-500' },
    { id: 'premium', name: 'Premium', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
            selectedCategory === category.id
              ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
              : `${darkMode ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-50'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;