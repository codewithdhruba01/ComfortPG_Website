import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const FAQ: React.FC = () => {
  const { isDark } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      category: 'Booking & Payments',
      faqs: [
        {
          question: 'How do I book a room?',
          answer: 'You can book a room through our website by browsing available rooms, selecting your preferred accommodation, and completing the booking process online. You\'ll need to provide basic information and make a booking deposit.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major payment methods including credit cards, debit cards, UPI, net banking, and digital wallets. You can also pay through bank transfers and cash at our offices.'
        },
        {
          question: 'Is there a booking fee?',
          answer: 'We charge a nominal booking fee of ₹500 which is adjustable against your first month\'s rent. This fee is non-refundable and secures your booking.'
        },
        {
          question: 'Can I get a refund if I cancel?',
          answer: 'Refund policies vary based on the cancellation timeline. Cancellations made 30 days before move-in are eligible for full refund minus booking fee. Please check our cancellation policy for detailed terms.'
        }
      ]
    },
    {
      category: 'Accommodation & Facilities',
      faqs: [
        {
          question: 'What amenities are included?',
          answer: 'Our standard amenities include WiFi, electricity, water, housekeeping, laundry, meals, security, and maintenance. Specific amenities may vary by property and room type.'
        },
        {
          question: 'Are meals included in the rent?',
          answer: 'Yes, most of our accommodations include meals. We provide nutritious breakfast and dinner prepared by our in-house kitchen staff. Meal plans can be customized based on dietary preferences.'
        },
        {
          question: 'What about laundry facilities?',
          answer: 'Laundry service is included in most of our properties. We provide washing machines and drying areas, or professional laundry service depending on the property.'
        },
        {
          question: 'Is parking available?',
          answer: 'Yes, we provide parking facilities for both two-wheelers and four-wheelers at most of our properties. Parking charges may apply based on the property and vehicle type.'
        }
      ]
    },
    {
      category: 'Rules & Policies',
      faqs: [
        {
          question: 'What are the check-in and check-out times?',
          answer: 'Standard check-in time is 12:00 PM and check-out is 11:00 AM. We can accommodate early check-in or late check-out based on availability with prior notice.'
        },
        {
          question: 'Are visitors allowed?',
          answer: 'Yes, visitors are allowed during specified hours (typically 9 AM to 9 PM) with prior intimation at the reception. Overnight guests require special permission and may incur additional charges.'
        },
        {
          question: 'What is the notice period for vacating?',
          answer: 'We require a 30-day notice period for vacating the room. This allows us to process your security deposit refund and prepare the room for the next occupant.'
        },
        {
          question: 'Are pets allowed?',
          answer: 'Pet policies vary by property. Some of our properties allow pets with prior approval and additional security deposit. Please check with our team for pet-friendly accommodations.'
        }
      ]
    },
    {
      category: 'Safety & Security',
      faqs: [
        {
          question: 'What security measures do you have?',
          answer: 'We have 24/7 security guards, CCTV surveillance, biometric access control, and secure entry systems. All properties are well-lit and monitored for resident safety.'
        },
        {
          question: 'What happens in case of medical emergency?',
          answer: 'We have tie-ups with nearby hospitals and medical facilities. Our staff is trained to handle medical emergencies and we maintain a first-aid kit at all properties.'
        },
        {
          question: 'Are there any safety protocols for COVID-19?',
          answer: 'Yes, we follow all government guidelines including regular sanitization, temperature checks, mask requirements in common areas, and social distancing measures.'
        },
        {
          question: 'How do you handle maintenance issues?',
          answer: 'We have a dedicated maintenance team that responds to issues within 24 hours. You can report problems through our app, phone, or directly to the property manager.'
        }
      ]
    },
    {
      category: 'General Information',
      faqs: [
        {
          question: 'Do you provide furnished rooms?',
          answer: 'Yes, all our rooms come fully furnished with bed, study table, chair, wardrobe, and other essential furniture. The exact furnishing may vary by room type and property.'
        },
        {
          question: 'What documents do I need to provide?',
          answer: 'You need to provide a valid ID proof (Aadhar/Passport/Driving License), address proof, passport-size photographs, and a local guardian\'s contact details.'
        },
        {
          question: 'Can I change my room after booking?',
          answer: 'Room changes are possible based on availability and may incur additional charges. Please contact our team to discuss your requirements and available options.'
        },
        {
          question: 'Do you offer long-term discounts?',
          answer: 'Yes, we offer attractive discounts for long-term bookings (6+ months). The discount percentage increases with the duration of stay. Contact us for customized pricing.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    faqs: category.faqs.filter(faq => 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.faqs.length > 0);

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className={`w-full h-full ${
            isDark ? 'bg-gradient-to-r from-blue-900 to-indigo-900' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
          }`} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Find answers to common questions about our services, booking process, 
              and policies. Can't find what you're looking for? Contact our support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className={`py-12 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                isDark ? 'text-gray-400' : 'text-gray-500'
              } w-5 h-5`} />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isDark
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                } text-lg`}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFAQs.length > 0 ? (
            <div className="space-y-8">
              {filteredFAQs.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <h2 className={`text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  } mb-6`}>
                    {category.category}
                  </h2>
                  <div className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 100 + faqIndex;
                      const isExpanded = expandedItems.includes(globalIndex);
                      
                      return (
                        <motion.div
                          key={faqIndex}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: faqIndex * 0.05 }}
                          className={`border rounded-lg overflow-hidden ${
                            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                          } shadow-sm hover:shadow-md transition-shadow duration-200`}
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className={`w-full text-left px-6 py-4 flex items-center justify-between hover:bg-opacity-50 transition-colors duration-200 ${
                              isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                            }`}
                          >
                            <span className={`font-medium pr-4 ${
                              isDark ? 'text-white' : 'text-gray-900'
                            }`}>
                              {faq.question}
                            </span>
                            {isExpanded ? (
                              <ChevronUp className={`w-5 h-5 flex-shrink-0 ${
                                isDark ? 'text-gray-400' : 'text-gray-500'
                              }`} />
                            ) : (
                              <ChevronDown className={`w-5 h-5 flex-shrink-0 ${
                                isDark ? 'text-gray-400' : 'text-gray-500'
                              }`} />
                            )}
                          </button>
                          
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className={`px-6 pb-4 ${
                                  isDark ? 'text-gray-300' : 'text-gray-700'
                                } leading-relaxed`}>
                                  {faq.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-center py-16 ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } rounded-xl`}
            >
              <div className={`text-6xl mb-4 ${
                isDark ? 'text-gray-600' : 'text-gray-400'
              }`}>
                🔍
              </div>
              <h3 className={`text-xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-2`}>
                No results found
              </h3>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              } mb-4`}>
                Try adjusting your search terms or browse through our FAQ categories
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Clear Search
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Actions */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Still Have Questions?
            </h2>
            <p className={`text-lg ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Our support team is here to help you with any questions or concerns
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              } text-center`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                isDark ? 'bg-blue-600/20' : 'bg-blue-100'
              } mb-4`}>
                <HelpCircle className={`w-8 h-8 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                }`} />
              </div>
              <h3 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-3`}>
                Live Chat
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              } mb-4`}>
                Get instant help from our support team
              </p>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Start Chat
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              } text-center`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                isDark ? 'bg-green-600/20' : 'bg-green-100'
              } mb-4`}>
                <span className="text-2xl">📞</span>
              </div>
              <h3 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-3`}>
                Call Us
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              } mb-4`}>
                Speak directly with our team
              </p>
              <a
                href="tel:+919876543210"
                className="block w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                +91 98765 43210
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              } text-center`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                isDark ? 'bg-purple-600/20' : 'bg-purple-100'
              } mb-4`}>
                <span className="text-2xl">✉️</span>
              </div>
              <h3 className={`text-lg font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-3`}>
                Email Support
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              } mb-4`}>
                Send us your detailed questions
              </p>
              <a
                href="mailto:support@comfortpg.com"
                className="block w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Email Us
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;