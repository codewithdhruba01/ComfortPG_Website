import React from 'react';
import { useApp } from '../context/AppContext';

interface StaticPageProps {
  title: string;
  content: React.ReactNode;
}

const StaticPage: React.FC<StaticPageProps> = ({ title, content }) => {
  const { darkMode } = useApp();

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border p-8 md:p-12`}>
          <h1 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}>
            {title}
          </h1>
          <div className={`prose prose-lg max-w-none ${darkMode ? 'prose-invert' : ''}`}>
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Privacy: React.FC = () => {
  const content = (
    <div className="space-y-6">
      <p>
        At ComfortPG, we are committed to protecting your privacy and ensuring the security of your personal information.
        This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
      <p>
        We collect information you provide directly to us, such as when you create an account, book a room, or contact us.
        This may include your name, email address, phone number, and payment information.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
      <p>
        We use the information we collect to provide, maintain, and improve our services, process transactions,
        communicate with you, and comply with legal obligations.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
      <p>
        We implement appropriate technical and organizational measures to protect your personal information
        against unauthorized access, disclosure, or destruction.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us at privacy@pghub.com.
      </p>
    </div>
  );

  return <StaticPage title="Privacy Policy" content={content} />;
};

export const Terms: React.FC = () => {
  const content = (
    <div className="space-y-6">
      <p>
        Welcome to ComfortPG. These Terms and Conditions govern your use of our services.
        By accessing or using our platform, you agree to be bound by these terms.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Booking Terms</h2>
      <p>
        All bookings are subject to availability and confirmation. Payment must be made according to the
        agreed terms, and cancellations are subject to our cancellation policy.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">User Responsibilities</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account information and for all
        activities that occur under your account.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Prohibited Activities</h2>
      <p>
        You may not use our services for any illegal or unauthorized purpose, or engage in any activity
        that disrupts or interferes with our services.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
      <p>
        ComfortPG shall not be liable for any indirect, incidental, special, or consequential damages
        arising out of or in connection with your use of our services.
      </p>
    </div>
  );

  return <StaticPage title="Terms & Conditions" content={content} />;
};

export const Funding: React.FC = () => {
  const content = (
    <div className="space-y-6">
      <p>
        ComfortPG is committed to transparency in our funding and investment activities.
        This page provides information about our funding sources and investment opportunities.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Current Funding</h2>
      <p>
        We are currently self-funded and have raised initial capital from private investors and founders.
        Our funding allows us to expand our services and improve our platform continuously.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Investment Opportunities</h2>
      <p>
        We are open to strategic partnerships and investment opportunities that align with our mission
        to provide quality accommodation solutions. If you're interested in investing, please contact us.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Funds</h2>
      <p>
        Our funding is primarily used for platform development, property acquisition, technology improvements,
        and expanding our team to serve more residents effectively.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Contact for Investment</h2>
      <p>
        For investment inquiries, please contact us at investors@pghub.com with your investment proposal
        and we will get back to you within 48 hours.
      </p>
    </div>
  );

  return <StaticPage title="Funding Information" content={content} />;
};

export const Partner: React.FC = () => {
  const content = (
    <div className="space-y-6">
      <p>
        Join the ComfortPG network and become a partner property owner. We're always looking for quality
        properties to add to our platform and provide excellent accommodation options for our residents.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Partnership Benefits</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Professional property management services</li>
        <li>Marketing and promotion on our platform</li>
        <li>Guaranteed occupancy and rental income</li>
        <li>24/7 customer support for residents</li>
        <li>Regular property maintenance and upkeep</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Partner Requirements</h2>
      <p>
        We partner with property owners who share our commitment to quality and safety. Properties must
        meet our standards for safety, cleanliness, and amenities.
      </p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Partnership Process</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Submit your property details through our partnership form</li>
        <li>Property inspection and evaluation by our team</li>
        <li>Agreement negotiation and contract signing</li>
        <li>Property setup and listing on our platform</li>
        <li>Ongoing management and support</li>
      </ol>
      
      <h2 className="text-2xl font-semibold mt-8 mb-4">Get Started</h2>
      <p>
        Ready to partner with us? Contact our partnership team at partners@pghub.com or call us at
        +91 9999999999 to discuss your property and partnership opportunities.
      </p>
    </div>
  );

  return <StaticPage title="Partner with Us" content={content} />;
};

export const FAQ: React.FC = () => {
  const { darkMode } = useApp();
  
  const faqs = [
    {
      question: "What is included in the room rent?",
      answer: "Room rent includes accommodation, meals (breakfast, lunch, dinner), Wi-Fi, electricity, water, and basic maintenance. Some premium rooms may include additional amenities."
    },
    {
      question: "Is there a security deposit required?",
      answer: "Yes, we require a security deposit of ₹10,000 which is refundable at the time of checkout, subject to any damages or outstanding dues."
    },
    {
      question: "Can I visit the property before booking?",
      answer: "Absolutely! We encourage prospective residents to visit and inspect the property. You can schedule a visit by contacting us or booking an appointment online."
    },
    {
      question: "What is the minimum stay period?",
      answer: "The minimum stay period is typically 1 month. However, this may vary depending on the property and room type. Please check the specific terms for each property."
    },
    {
      question: "Are guests allowed?",
      answer: "Yes, guests are allowed during specified hours (usually 6 AM to 10 PM). Overnight guests may require prior permission and may be subject to additional charges."
    },
    {
      question: "What happens if I need to cancel my booking?",
      answer: "Cancellation policies vary by property. Generally, cancellations made 7 days before check-in are eligible for a full refund. Please review the specific cancellation policy for your booking."
    },
    {
      question: "Is parking available?",
      answer: "Most of our properties offer parking facilities for both two-wheelers and four-wheelers. Parking availability and charges may vary by location."
    },
    {
      question: "What safety measures are in place?",
      answer: "We prioritize safety with 24/7 security, CCTV surveillance, secure entry systems, and trained security personnel. All properties follow strict safety protocols."
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Frequently Asked Questions
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Find answers to common questions about our services and policies.
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border p-6`}
            >
              <h3 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                {faq.question}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
        
        <div className={`mt-12 text-center p-8 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border`}>
          <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Still have questions?
          </h2>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            Can't find the answer you're looking for? Please contact our support team.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-block"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};