import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const PrivacyPolicy: React.FC = () => {
  const { isDark } = useTheme();

  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal information (name, email, phone number, address)',
        'Payment and billing information',
        'Usage data and preferences',
        'Communication records',
        'Device and browser information',
        'Location data (with permission)'
      ]
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'Providing and improving our services',
        'Processing bookings and payments',
        'Communicating with you about your account',
        'Sending relevant updates and offers',
        'Ensuring security and preventing fraud',
        'Complying with legal requirements'
      ]
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'Industry-standard encryption for data transmission',
        'Secure servers with regular security updates',
        'Access controls and authentication systems',
        'Regular security audits and monitoring',
        'Employee training on data protection',
        'Incident response procedures'
      ]
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      content: [
        'Access your personal information',
        'Correct inaccurate data',
        'Delete your account and data',
        'Restrict data processing',
        'Data portability',
        'Withdraw consent at any time'
      ]
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
              <Shield className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-300 mt-4">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none"
          >
            <div className={`p-6 rounded-lg ${
              isDark ? 'bg-gray-700' : 'bg-blue-50'
            } mb-8`}>
              <h2 className={`text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-4`}>
                Our Commitment to Privacy
              </h2>
              <p className={`text-lg ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                At ComfortPG, we are committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you use our services. Please read this policy carefully to understand our practices.
              </p>
            </div>

            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`mb-8 p-6 rounded-lg ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${
                    isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                  } mr-4`}>
                    <section.icon className={`w-6 h-6 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </div>
                  <h3 className={`text-xl font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className={`flex items-start ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      <span className={`inline-block w-2 h-2 rounded-full ${
                        isDark ? 'bg-blue-400' : 'bg-blue-600'
                      } mr-3 mt-2 flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className={`py-16 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Third Party Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}
            >
              <h3 className={`text-xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-4`}>
                Third-Party Services
              </h3>
              <p className={`${
                isDark ? 'text-gray-300' : 'text-gray-700'
              } mb-4`}>
                We may use third-party services to enhance our offerings:
              </p>
              <ul className={`space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>• Payment processors for secure transactions</li>
                <li>• Analytics services for service improvement</li>
                <li>• Communication platforms for customer support</li>
                <li>• Marketing tools for relevant communications</li>
              </ul>
            </motion.div>

            {/* Cookies Policy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}
            >
              <h3 className={`text-xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-4`}>
                Cookies & Tracking
              </h3>
              <p className={`${
                isDark ? 'text-gray-300' : 'text-gray-700'
              } mb-4`}>
                We use cookies and similar technologies to:
              </p>
              <ul className={`space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>• Remember your preferences</li>
                <li>• Improve site functionality</li>
                <li>• Analyze usage patterns</li>
                <li>• Provide personalized experiences</li>
              </ul>
            </motion.div>

            {/* Data Retention */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}
            >
              <h3 className={`text-xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-4`}>
                Data Retention
              </h3>
              <p className={`${
                isDark ? 'text-gray-300' : 'text-gray-700'
              } mb-4`}>
                We retain your information only as long as necessary for:
              </p>
              <ul className={`space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>• Providing our services</li>
                <li>• Legal compliance</li>
                <li>• Resolving disputes</li>
                <li>• Enforcing agreements</li>
              </ul>
            </motion.div>

            {/* Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg ${
                isDark ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}
            >
              <h3 className={`text-xl font-semibold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-4`}>
                Policy Updates
              </h3>
              <p className={`${
                isDark ? 'text-gray-300' : 'text-gray-700'
              } mb-4`}>
                We may update this policy periodically. When we do:
              </p>
              <ul className={`space-y-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <li>• We'll notify you of significant changes</li>
                <li>• Updated policy will be posted on our website</li>
                <li>• Your continued use implies acceptance</li>
                <li>• You can review changes at any time</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-16 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-8 rounded-lg ${
              isDark ? 'bg-gray-700' : 'bg-blue-50'
            } text-center`}
          >
            <AlertTriangle className={`w-12 h-12 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            } mx-auto mb-4`} />
            <h3 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Questions About Your Privacy?
            </h3>
            <p className={`text-lg ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            } mb-6`}>
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:privacy@comfortpg.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Email Privacy Team
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

export default PrivacyPolicy;