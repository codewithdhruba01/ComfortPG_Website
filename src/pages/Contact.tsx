import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  CheckCircle
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
      subject: '',
      message: ''
    });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 98765 43210',
      subDetails: 'Available 24/7',
      link: 'tel:+919876543210'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@comfortpg.com',
      subDetails: 'We reply within 24 hours',
      link: 'mailto:info@comfortpg.com'
    },
    {
      icon: MapPin,
      title: 'Office Address',
      details: 'Newtown 18, Kolkata, WB 700135',
      subDetails: 'Visit us during office hours',
      link: 'https://maps.app.goo.gl/iP4qnH7hXeC1YPvU7'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Mon - Sat: 9:00 AM - 8:00 PM',
      subDetails: 'Sunday: 10:00 AM - 6:00 PM',
      link: null
    }
  ];

  const subjects = [
    'General Inquiry',
    'Room Booking',
    'Technical Support',
    'Feedback',
    'Partnership',
    'Complaint',
    'Other'
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Contact Us"
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
              Get In Touch
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-2xl mx-auto">
              We're here to help you find your perfect accommodation. 
              Reach out to us anytime!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                } hover:shadow-lg transition-shadow duration-300 text-center`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                  isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                } mb-4`}>
                  <info.icon className={`w-8 h-8 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <h3 className={`text-lg font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-2`}>
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className={`block font-medium ${
                      isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    } transition-colors duration-200 mb-1`}
                  >
                    {info.details}
                  </a>
                ) : (
                  <p className={`font-medium ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  } mb-1`}>
                    {info.details}
                  </p>
                )}
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {info.subDetails}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-xl`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className={`w-6 h-6 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <h2 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Send us a Message
                </h2>
              </div>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg flex items-center space-x-2"
                >
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-700">Message sent successfully! We'll get back to you soon.</span>
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
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
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
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'bg-white border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
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
                    rows={6}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tell us how we can help you..."
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
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-xl`}>
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-4`}>
                  Find Us Here
                </h3>
                <div className="h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                  <p className={`text-gray-600 text-center`}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58938.65980612881!2d88.40419081817589!3d22.591583148434356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02754a79bf63bf%3A0xbbbcc2e3c00e3980!2sNew%20Town%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1752781641111!5m2!1sen!2sin"></iframe>
                    <br />
                    <span className="text-sm">Newtown 18, Kolkata, WB 700135</span>
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-xl`}>
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-4`}>
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="tel:+919876543210"
                    className={`flex items-center space-x-3 p-4 rounded-lg transition-colors duration-200 ${
                      isDark
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Call us now</p>
                      <p className="text-sm text-gray-500">+91 98765 43210</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@comfortpg.com"
                    className={`flex items-center space-x-3 p-4 rounded-lg transition-colors duration-200 ${
                      isDark
                        ? 'bg-gray-700 text-white hover:bg-gray-600'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Email us</p>
                      <p className="text-sm text-gray-500">info@comfortpg.com</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-xl`}>
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-4`}>
                  Business Hours
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Monday - Friday
                    </span>
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      9:00 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Saturday
                    </span>
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      9:00 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      Sunday
                    </span>
                    <span className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      10:00 AM - 6:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;