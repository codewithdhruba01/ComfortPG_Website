import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Search, 
  Shield, 
  Wifi, 
  Users, 
  Building, 
  Star, 
  ArrowRight,
  // CheckCircle,
  MapPin,
  // Calendar,
  Phone
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { rooms } from '../data/rooms';

const Home: React.FC = () => {
  const { isDark } = useTheme();

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'CCTV surveillance, biometric access, and 24/7 security for your peace of mind.',
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Unlimited WiFi with fiber optic connection for seamless work and entertainment.',
    },
    {
      icon: Users,
      title: 'Community Living',
      description: 'Connect with like-minded individuals and build lasting friendships.',
    },
    {
      icon: Building,
      title: 'Modern Facilities',
      description: 'Fully furnished rooms with contemporary amenities and regular maintenance.',
    },
  ];

  const stats = [
    { label: 'Happy Residents', value: '1000+' },
    { label: 'Available Rooms', value: '200+' },
    { label: 'Cities Covered', value: '5+' },
    { label: 'Years Experience', value: '8+' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer',
      content: 'Amazing experience! The room was clean, modern, and exactly as described. Great value for money.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Rahul Kumar',
      role: 'Student',
      content: 'Perfect for students! Great amenities, friendly staff, and a conducive environment for studies.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Anita Patel',
      role: 'Marketing Manager',
      content: 'Excellent service and facilities. The community here is wonderful and the location is convenient.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Comfortable Room"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${
            isDark ? 'bg-black/70' : 'bg-black/50'
          }`} />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Find Your Perfect
              <span className="block text-blue-400">Home Away From Home</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Discover comfortable, affordable, and secure PG accommodations 
              tailored for students and professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/rooms"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                Explore Rooms
              </Link>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 transform hover:scale-105"
              >
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`text-3xl sm:text-4xl font-bold ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                } mb-2`}>
                  {stat.value}
                </div>
                <div className={`text-sm sm:text-base ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Why Choose ComfortPG?
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              We provide more than just accommodation - we create a lifestyle 
              that enhances your living experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`text-center p-6 rounded-xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                  isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                } mb-4`}>
                  <feature.icon className={`w-8 h-8 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-3`}>
                  {feature.title}
                </h3>
                <p className={`${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Featured Rooms
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Discover our most popular accommodations, carefully selected 
              for their comfort, location, and value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.slice(0, 3).map((room, index) => (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-xl ${
                  isDark ? 'bg-gray-700' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-2xl font-bold">₹{room.price.toLocaleString()}</div>
                    <div className="text-sm opacity-90">/month</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  } mb-2`}>
                    {room.title}
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  } mb-4`}>
                    {room.shortDescription}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {room.rating}
                      </span>
                    </div>
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
                  </div>
                  
                  <Link
                    to={`/room/${room.id}`}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/rooms"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
            >
              View All Rooms
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              What Our Residents Say
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Don't just take our word for it - hear from our satisfied residents 
              about their experience living with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                } mb-6 italic`}>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className={`font-semibold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {testimonial.name}
                    </div>
                    <div className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-center p-12 rounded-2xl ${
              isDark ? 'bg-gray-700' : 'bg-blue-50'
            }`}
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Ready to Find Your Perfect Room?
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } mb-8 max-w-2xl mx-auto`}>
              Join thousands of satisfied residents who have made ComfortPG their home. 
              Book your room today and experience comfortable living.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/rooms"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Rooms
              </Link>
              <a
                href="tel:+919876543210"
                className={`inline-flex items-center px-8 py-4 border-2 ${
                  isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-600' : 'border-blue-600 text-blue-600 hover:bg-blue-600'
                } font-semibold rounded-lg hover:text-white transition-all duration-200 transform hover:scale-105`}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;