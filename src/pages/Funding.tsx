import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Users, Target, Award, Building, Handshake, Globe } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Funding: React.FC = () => {
  const { isDark } = useTheme();

  const milestones = [
    {
      year: '2016',
      title: 'Company Founded',
      description: 'Started with a vision to transform student accommodation',
      amount: '₹50 Lakhs',
      type: 'Bootstrap Funding'
    },
    {
      year: '2018',
      title: 'Seed Round',
      description: 'First institutional funding to expand operations',
      amount: '₹2.5 Crores',
      type: 'Seed Investment'
    },
    {
      year: '2020',
      title: 'Series A',
      description: 'Scaling across multiple cities and technology upgrade',
      amount: '₹15 Crores',
      type: 'Series A'
    },
    {
      year: '2022',
      title: 'Series B',
      description: 'Expansion to 5 cities and platform enhancement',
      amount: '₹45 Crores',
      type: 'Series B'
    },
    {
      year: '2024',
      title: 'Series C',
      description: 'National expansion and technology innovation',
      amount: '₹120 Crores',
      type: 'Series C'
    }
  ];

  const investors = [
    {
      name: 'Accel Partners',
      logo: '🏢',
      type: 'Lead Investor',
      round: 'Series A, B, C',
      description: 'Leading venture capital firm focused on early-stage investments'
    },
    {
      name: 'Sequoia Capital',
      logo: '🌲',
      type: 'Strategic Investor',
      round: 'Series B, C',
      description: 'Global venture capital firm with expertise in scaling businesses'
    },
    {
      name: 'Kalaari Capital',
      logo: '💎',
      type: 'Early Investor',
      round: 'Seed, Series A',
      description: 'India-focused venture capital firm supporting entrepreneurs'
    },
    {
      name: 'Matrix Partners',
      logo: '⚡',
      type: 'Growth Investor',
      round: 'Series C',
      description: 'Global venture capital firm investing in innovative companies'
    }
  ];

  const stats = [
    {
      icon: DollarSign,
      label: 'Total Funding Raised',
      value: '₹232.5 Crores',
      description: 'Over 8 years of growth'
    },
    {
      icon: TrendingUp,
      label: 'Valuation',
      value: '₹800 Crores',
      description: 'Current company valuation'
    },
    {
      icon: Users,
      label: 'Investor Partners',
      value: '12+',
      description: 'Strategic and financial investors'
    },
    {
      icon: Target,
      label: 'Next Round Target',
      value: '₹200 Crores',
      description: 'For international expansion'
    }
  ];

  const fundingUse = [
    {
      icon: Building,
      title: 'Property Expansion',
      percentage: '40%',
      description: 'Acquiring and developing new properties across India'
    },
    {
      icon: Globe,
      title: 'Technology Development',
      percentage: '30%',
      description: 'Building cutting-edge platform and mobile applications'
    },
    {
      icon: Users,
      title: 'Team Growth',
      percentage: '20%',
      description: 'Hiring top talent across all departments'
    },
    {
      icon: Award,
      title: 'Marketing & Brand',
      percentage: '10%',
      description: 'Building brand awareness and customer acquisition'
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
              <DollarSign className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Funding Information
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Learn about our funding journey, investors, and how we're using capital 
              to transform the student accommodation industry.
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
                className={`text-center p-6 rounded-xl ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                } hover:shadow-lg transition-shadow duration-300`}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
                  isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                } mb-4`}>
                  <stat.icon className={`w-8 h-8 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <div className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } mb-2`}>
                  {stat.value}
                </div>
                <div className={`text-sm font-medium ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                } mb-2`}>
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

      {/* Funding Timeline */}
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
              Funding Timeline
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Our journey from startup to industry leader through strategic funding rounds
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 h-full ${
              isDark ? 'bg-gray-700' : 'bg-gray-300'
            }`} />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className={`p-6 rounded-xl ${
                    isDark ? 'bg-gray-800' : 'bg-white'
                  } shadow-lg`}>
                    <div className={`text-sm font-semibold ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    } mb-2`}>
                      {milestone.year}
                    </div>
                    <h3 className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    } mb-2`}>
                      {milestone.title}
                    </h3>
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    } mb-3`}>
                      {milestone.description}
                    </p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      isDark ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-700'
                    }`}>
                      {milestone.type}
                    </div>
                    <div className={`text-lg font-bold ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    } mt-2`}>
                      {milestone.amount}
                    </div>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${
                  isDark ? 'bg-blue-600' : 'bg-blue-500'
                } border-4 ${isDark ? 'border-gray-900' : 'border-gray-50'}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Section */}
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
              Our Investors
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Trusted by leading venture capital firms and strategic investors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investors.map((investor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-xl ${
                  isDark ? 'bg-gray-700' : 'bg-gray-50'
                } hover:shadow-lg transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{investor.logo}</div>
                  <div>
                    <h3 className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {investor.name}
                    </h3>
                    <p className={`text-sm ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`}>
                      {investor.type}
                    </p>
                  </div>
                </div>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } mb-3`}>
                  {investor.description}
                </p>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  isDark ? 'bg-purple-900 text-purple-300' : 'bg-purple-100 text-purple-700'
                }`}>
                  {investor.round}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fund Utilization */}
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
              Fund Utilization
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              How we're strategically investing our funding to drive growth and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fundingUse.map((item, index) => (
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
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${
                    isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                  } mr-4`}>
                    <item.icon className={`w-6 h-6 ${
                      isDark ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-2xl font-bold ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`}>
                      {item.percentage}
                    </p>
                  </div>
                </div>
                <p className={`${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Plans */}
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
              Future Growth Plans
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } max-w-2xl mx-auto`}>
              Our vision for the next phase of growth and expansion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              } text-center`}
            >
              <Globe className={`w-12 h-12 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              } mx-auto mb-4`} />
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-3`}>
                National Expansion
              </h3>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Expanding to 25+ cities across India by 2025
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              } text-center`}
            >
              <Building className={`w-12 h-12 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              } mx-auto mb-4`} />
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-3`}>
                Property Development
              </h3>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Building 100+ purpose-built student accommodations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl ${
                isDark ? 'bg-gray-700' : 'bg-gray-50'
              } text-center`}
            >
              <Handshake className={`w-12 h-12 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              } mx-auto mb-4`} />
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              } mb-3`}>
                Strategic Partnerships
              </h3>
              <p className={`${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Collaborating with universities and educational institutions
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`text-center p-12 rounded-2xl ${
              isDark ? 'bg-gray-800' : 'bg-white'
            } shadow-xl`}
          >
            <h2 className={`text-3xl sm:text-4xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            } mb-4`}>
              Interested in Investing?
            </h2>
            <p className={`text-xl ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } mb-8 max-w-2xl mx-auto`}>
              Join us in revolutionizing student accommodation. Contact our investor 
              relations team to learn more about investment opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:investors@comfortpg.com"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Contact Investor Relations
              </a>
              <a
                href="#"
                className={`inline-flex items-center px-8 py-4 border-2 ${
                  isDark ? 'border-gray-600 text-gray-300 hover:bg-gray-600' : 'border-blue-600 text-blue-600 hover:bg-blue-600'
                } font-semibold rounded-lg hover:text-white transition-all duration-200`}
              >
                Download Investor Deck
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Funding;