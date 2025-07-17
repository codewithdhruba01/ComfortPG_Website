import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Building, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  Send
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Partner: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    partnerType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      partnerType: '',
      message: ''
    });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const partnerTypes = [
    {
      icon: Building,
      title: 'Property Owners',
      description: 'Partner with us to maximize your property ROI through our proven management system.',
      benefits: [
        'Guaranteed occupancy rates',
        'Professional property management',
        'Regular maintenance and upkeep',
        'Competitive revenue sharing'
      ]
    },
    {
      icon: Users,
      title: 'Educational Institutions',
      description: 'Collaborate to provide quality accommodation solutions for your students.',
      benefits: [
        'Dedicated student housing',
        'Customized service packages',
        'Student welfare programs',
        'Flexible partnership terms'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Business Partners',
      description: 'Join our network of service providers and vendors for mutual growth.',
      benefits: [
        'Steady business opportunities',
        'Prompt payment terms',
        'Long-term partnerships',
        'Growth support programs'
      ]
    },
    {
      icon: Handshake,
      title: 'Franchise Partners',
      description: 'Expand our brand in your city with our proven business model.',
      benefits: [
        'Established brand recognition',
        'Comprehensive training programs',
        'Marketing support',
        'Operational guidance'
      ]
    }
  ];

  const stats = [
    {
      label: 'Partner Properties',
      value: '150+',
      description: 'Across multiple cities'
    },
    {
      label: 'Revenue Growth',
      value: '300%',
      description: 'Average partner ROI increase'
    },
    {
      label: 'Happy Partners',
      value: '95%',
      description: 'Partner satisfaction rate'
    },
    {
      label: 'Cities Covered',
      value: '5+',
      description: 'And expanding rapidly'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Gupta',
      role: 'Property Owner',
      content: 'Partnering with ComfortPG has been the best decision. My property occupancy increased to 95% and maintenance hassles are completely eliminated.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Dr. Meera Sharma',
      role: 'College Principal',
      content: 'The partnership has solved our student accommodation challenges. The quality of service and student care is exceptional.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      name: 'Amit Enterprises',
      role: 'Service Provider',
      content: 'Working with ComfortPG has given us steady business growth. Their professional approach and timely payments make them ideal partners.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ];

  const partnershipProcess = [
    {
      step: '1',
      title: 'Initial Discussion',
      description: 'Share your requirements and learn about our partnership models'
    },
    {
      step: '2',
      title: 'Evaluation',
      description: 'We assess mutual fit and discuss terms and conditions'
    },
    {
      step: '3',
      title: 'Agreement',
      description: 'Finalize partnership terms and sign the agreement'
    },
    {
      step: '4',
      title: 'Onboarding',
      description: 'Complete setup and integration with our systems'
    },
    {
      step: '5',
      title: 'Launch',
      description: 'Go live with full support and ongoing assistance'
    }
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className={`w-full h-full ${
            isDark ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-600 to-purple-600'
          }`} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Handshake className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Partner With Us
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Join ComfortPG's growing network of partners and create mutually beneficial 
              relationships that drive success for everyone involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                } mb-1`}>
                  {stat.label}
                </div>
                <div className={`text-xs ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
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
              Partnership Opportunities
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Explore various ways to collaborate with ComfortPG and grow together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerTypes.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-xl ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-shadow duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                  isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                } mb-6`}>
                  <partner.icon className={`w-8 h-8 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-4`}>
                  {partner.title}
                </h3>
                <p className={`${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } mb-6`}>
                  {partner.description}
                </p>
                <ul className="space-y-2">
                  {partner.benefits.map((benefit, idx) => (
                    <li key={idx} className={`flex items-center ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <CheckCircle className={`w-4 h-4 ${
                        isDark ? 'text-green-400' : 'text-green-600'
                      } mr-2 flex-shrink-0`} />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
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
              Partnership Process
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              A simple 5-step process to become our partner
            </p>
          </motion.div>

          <div className="relative">
            {/* Process Line */}
            <div className={`hidden md:block absolute top-12 left-0 right-0 h-0.5 ${
              isDark ? 'bg-gray-700' : 'bg-gray-300'
            }`} />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {partnershipProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative text-center"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${
                    isDark ? 'bg-blue-600' : 'bg-blue-500'
                  } text-white font-bold text-lg mb-4 relative z-10`}>
                    {process.step}
                  </div>
                  <h3 className={`text-lg font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  } mb-2`}>
                    {process.title}
                  </h3>
                  <p className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Partners Say
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Hear from our successful partners about their experience with ComfortPG
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
                } shadow-lg`}
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

      {/* Partner Application Form */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Ready to Partner?
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Fill out the form below and our partnership team will get back to you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700">Application submitted successfully! We'll contact you soon.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    } mb-2`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    } mb-2`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    } mb-2`}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    } mb-2`}>
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                          : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  } mb-2`}>
                    Partnership Type *
                  </label>
                  <select
                    name="partnerType"
                    value={formData.partnerType}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'bg-white border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="">Select partnership type</option>
                    <option value="property-owner">Property Owner</option>
                    <option value="educational-institution">Educational Institution</option>
                    <option value="service-provider">Service Provider</option>
                    <option value="franchise">Franchise Partner</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  } mb-2`}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tell us about your partnership interest..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                    isSubmitting
                      ? 'bg-gray-400 text-white cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Application</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-4`}>
                  Partnership Team
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Call us directly
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        +91 98765 43210
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Email us
                      </p>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        partners@comfortpg.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-4`}>
                  Why Partner With Us?
                </h3>
                <ul className="space-y-2">
                  <li className={`flex items-center ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Proven business model with 8+ years of success
                  </li>
                  <li className={`flex items-center ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Comprehensive support and training programs
                  </li>
                  <li className={`flex items-center ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Technology-driven operations and management
                  </li>
                  <li className={`flex items-center ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    Strong brand recognition and market presence
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;