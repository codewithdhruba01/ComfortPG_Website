import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Shield, AlertCircle, CheckCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Terms: React.FC = () => {
  const { isDark } = useTheme();

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using ComfortPG services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily use ComfortPG services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not modify or copy the materials, use the materials for any commercial purpose, or attempt to reverse engineer any software contained on our platform.'
    },
    {
      title: 'User Account',
      content: 'To access certain features of our service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must immediately notify us of any unauthorized use of your account.'
    },
    {
      title: 'Booking and Payment',
      content: 'All bookings are subject to availability and confirmation. Payment terms are clearly stated during the booking process. Cancellation policies apply as specified in your booking confirmation. We reserve the right to cancel bookings in case of non-payment or violation of terms.'
    },
    {
      title: 'Property Rules',
      content: 'Residents must comply with all property rules and regulations. This includes but is not limited to maintaining cleanliness, respecting other residents, following visitor policies, and adhering to quiet hours. Violation of property rules may result in termination of accommodation.'
    },
    {
      title: 'Prohibited Activities',
      content: 'Users are prohibited from engaging in illegal activities, causing damage to property, disturbing other residents, subletting without permission, or using the premises for commercial purposes. Any prohibited activity may result in immediate termination of services.'
    },
    {
      title: 'Limitation of Liability',
      content: 'ComfortPG shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.'
    },
    {
      title: 'Termination',
      content: 'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.'
    }
  ];

  return (
    <div className={`min-h-screen pt-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <div className={`w-full h-full ${
            isDark ? 'bg-gradient-to-r from-gray-800 to-gray-700' : 'bg-gradient-to-r from-blue-600 to-blue-700'
          }`} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Effective Date: January 1, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`p-6 rounded-lg ${
              isDark ? 'bg-gray-700' : 'bg-blue-50'
            } mb-8`}
          >
            <h2 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Welcome to ComfortPG
            </h2>
            <p className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              These Terms and Conditions ("Terms", "Terms and Conditions") govern your 
              relationship with ComfortPG operated by ComfortPG Services Pvt. Ltd. 
              ("us", "we", or "our"). Please read these Terms and Conditions carefully 
              before using our Service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Terms */}
      <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}
              >
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-4`}>
                  {index + 1}. {section.title}
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Governing Law */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-4">
                <Shield className={`w-6 h-6 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                } mr-3`} />
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Governing Law
                </h3>
              </div>
              <p className={`${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                These Terms shall be interpreted and governed by the laws of India, 
                without regard to its conflict of law provisions. Any disputes arising 
                from these terms shall be resolved in the courts of New Delhi, India.
              </p>
            </motion.div>

            {/* Changes to Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-4">
                <AlertCircle className={`w-6 h-6 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                } mr-3`} />
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Changes to Terms
                </h3>
              </div>
              <p className={`${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                We reserve the right to modify or replace these Terms at any time. 
                If a revision is material, we will provide at least 30 days notice 
                prior to any new terms taking effect.
              </p>
            </motion.div>

            {/* Severability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-4">
                <CheckCircle className={`w-6 h-6 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                } mr-3`} />
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Severability
                </h3>
              </div>
              <p className={`${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                If any provision of these Terms is held to be unenforceable or invalid, 
                such provision will be changed and interpreted to accomplish the 
                objectives of such provision.
              </p>
            </motion.div>

            {/* Entire Agreement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <div className="flex items-center mb-4">
                <FileText className={`w-6 h-6 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                } mr-3`} />
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Entire Agreement
                </h3>
              </div>
              <p className={`${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                These Terms constitute the entire agreement between us regarding 
                our Service and supersede and replace any prior agreements we 
                might have had between us regarding the Service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-8 rounded-lg ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } shadow-lg text-center`}
          >
            <h3 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Questions About These Terms?
            </h3>
            <p className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            } mb-6`}>
              If you have any questions about these Terms and Conditions, 
              please contact us at:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:legal@comfortpg.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Email Legal Team
              </a>
              <a
                href="tel:+919876543210"
                className={`inline-flex items-center justify-center px-6 py-3 border-2 ${
                  isDark ? 'border-gray-500 text-gray-300 hover:bg-gray-600' : 'border-blue-600 text-blue-600 hover:bg-blue-600'
                } font-semibold rounded-lg hover:text-white transition-all duration-200`}
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;