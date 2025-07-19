import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const TestimonialsSection: React.FC = () => {
  const { darkMode } = useApp();

  const testimonials = [
    {
      id: 1,
      name: 'Arjun Sharma',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      comment: 'Amazing PG with all modern amenities. The staff is very helpful and the location is perfect for my office commute. Highly recommended!'
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'CA Student',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      comment: 'Great experience living here. The rooms are spacious, clean, and the food is delicious. Safety is also top-notch with 24/7 security.'
    },
    {
      id: 3,
      name: 'Rohit Kumar',
      role: 'Marketing Manager',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      comment: 'The best PG I have ever stayed in. Professional management, great facilities, and a wonderful community of residents.'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'MBA Student',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5,
      comment: 'Excellent value for money! The WiFi is super fast, rooms are well-maintained, and the location is convenient for metro access.'
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
            What Our Residents
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent block mt-2">
              Say About Us
            </span>
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Don't just take our word for it. Here's what our happy residents have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'} p-8 rounded-2xl border hover:shadow-2xl transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Background Quote */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote className="w-16 h-16 text-purple-500" />
              </div>

              {/* Profile */}
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonial.name}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} relative z-10`}>
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;