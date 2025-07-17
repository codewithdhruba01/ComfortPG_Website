import React from 'react';
import { motion } from 'framer-motion';
import { 
  // Users, 
  // Building, 
  Shield, 
  Heart,
  Award,
  Target,
  Lightbulb,
  CheckCircle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { isDark } = useTheme();

  const values = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Your safety and security are our top priorities. We maintain strict security protocols and 24/7 surveillance.',
    },
    {
      icon: Heart,
      title: 'Community Care',
      description: 'We foster a welcoming community where residents feel at home and build meaningful connections.',
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'We are committed to providing exceptional service and maintaining the highest standards of accommodation.',
    },
    {
      icon: Target,
      title: 'Affordable Living',
      description: 'We believe comfortable living should be accessible to everyone, offering competitive pricing without compromising quality.',
    },
  ];

  const stats = [
    { label: 'Years of Experience', value: '8+' },
    { label: 'Happy Residents', value: '1000+' },
    { label: 'Properties Managed', value: '50+' },
    { label: 'Cities Served', value: '5+' },
  ];

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'With over 10 years in real estate, Rajesh founded ComfortPG to revolutionize student and professional accommodation.',
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Manager',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Priya ensures smooth operations across all properties, focusing on resident satisfaction and service excellence.',
    },
    {
      name: 'Amit Patel',
      role: 'Customer Relations',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      description: 'Amit leads our customer service team, ensuring every resident has a positive experience with ComfortPG.',
    },
  ];

  const achievements = [
    'Best PG Service Provider 2023',
    'Customer Choice Award 2022',
    'Excellence in Hospitality 2021',
    'Top Rated Accommodation Service',
    'Quality Certification ISO 9001',
    'Safety Standards Compliance',
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className={`absolute inset-0 ${
            isDark ? 'bg-black/70' : 'bg-black/50'
          }`} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              About ComfortPG
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto">
              Creating comfortable homes for students and professionals since 2016. 
              Your trusted partner in finding the perfect accommodation.
            </p>
          </motion.div>
        </div>
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

      {/* Our Story Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl sm:text-4xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-6`}>
                Our Story
              </h2>
              <div className="space-y-4 text-lg">
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  ComfortPG was founded in 2016 with a simple mission: to provide safe, 
                  comfortable, and affordable accommodation for students and working professionals. 
                  What started as a small venture has grown into one of the most trusted names 
                  in the PG accommodation industry.
                </p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  We understand that finding the right accommodation can be challenging, 
                  especially when you're new to a city. That's why we've dedicated ourselves 
                  to creating spaces that feel like home, with modern amenities, friendly 
                  communities, and exceptional service.
                </p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Today, we're proud to serve over 1000 residents across multiple cities, 
                  maintaining our commitment to quality, safety, and customer satisfaction 
                  in everything we do.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our Story"
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
              <div className={`absolute inset-0 rounded-xl ${
                isDark ? 'bg-blue-900/20' : 'bg-blue-600/20'
              }`} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
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
              Our Values
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              The principles that guide us in everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-xl ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                } hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                  isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                } mb-6`}>
                  <value.icon className={`w-8 h-8 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-4`}>
                  {value.title}
                </h3>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              The dedicated professionals behind ComfortPG
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
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
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-2`}>
                  {member.name}
                </h3>
                <p className={`text-blue-600 font-medium mb-4`}>
                  {member.role}
                </p>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              Our Achievements
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Recognition for our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center space-x-3 p-4 rounded-lg ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <CheckCircle className={`w-6 h-6 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                } flex-shrink-0`} />
                <span className={`font-medium ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Our Mission"
                className="w-full h-96 object-cover rounded-xl shadow-xl"
              />
              <div className={`absolute inset-0 rounded-xl ${
                isDark ? 'bg-blue-900/20' : 'bg-blue-600/20'
              }`} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className={`text-3xl sm:text-4xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-6`}>
                Our Mission
              </h2>
              <div className="space-y-4 text-lg">
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  To revolutionize the PG accommodation industry by providing safe, 
                  comfortable, and affordable living spaces that enable students and 
                  professionals to thrive in their pursuits.
                </p>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  We envision a future where finding quality accommodation is effortless, 
                  where every resident feels valued and cared for, and where communities 
                  are built on trust, respect, and mutual support.
                </p>
              </div>
              
              <div className="mt-8 flex items-center space-x-4">
                <div className={`p-3 rounded-full ${
                  isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <Lightbulb className={`w-6 h-6 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h3 className={`text-lg font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Innovation in Accommodation
                  </h3>
                  <p className={`${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    Continuously improving our services with technology and innovation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;