import React, { useState } from 'react';
import { CreditCard, Lock, CheckCircle, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

const Payment: React.FC = () => {
  const { darkMode, cartItems, clearCart } = useApp();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + (item.room.price * item.quantity), 0);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      
      // Clear cart after successful payment
      setTimeout(() => {
        clearCart();
        navigate('/');
      }, 3000);
    }, 2000);
  };

  if (paymentSuccess) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12 flex items-center justify-center`}>
        <div className="text-center">
          <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Payment Successful!
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
            Thank you for your booking. You will receive a confirmation email shortly.
          </p>
          <div className="text-center">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Redirecting to home page...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/cart"
          className={`inline-flex items-center space-x-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} mb-8 transition-colors`}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Cart</span>
        </Link>

        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Payment Details
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Complete your booking by providing payment information
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border p-6 mb-6`}>
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Payment Method
              </h2>
              
              <div className="space-y-4 mb-6">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-purple-600"
                  />
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Credit/Debit Card
                  </span>
                </label>
                
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-purple-600"
                  />
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">₹</span>
                  </div>
                  <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    UPI Payment
                  </span>
                </label>
              </div>

              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                        darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                      }`}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                          darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                          darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                        darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                      }`}
                    />
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    UPI ID
                  </label>
                  <input
                    type="text"
                    placeholder="yourname@upi"
                    className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    }`}
                  />
                </div>
              )}
            </div>

            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border p-6`}>
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Billing Information
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    }`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                    City
                  </label>
                  <input
                    type="text"
                    className={`w-full px-3 py-2 rounded-lg border focus:ring-2 focus:ring-purple-500 ${
                      darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border p-6 sticky top-8`}>
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.room.id} className="flex items-center space-x-4">
                    <img
                      src={item.room.image}
                      alt={item.room.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        {item.room.name}
                      </h4>
                      <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {item.room.type} • {item.room.size}
                      </p>
                    </div>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      ₹{item.room.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-4 mb-6`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Subtotal</span>
                  <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ₹{total.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Security Deposit</span>
                  <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ₹10,000
                  </span>
                </div>
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>Total</span>
                  <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ₹{(total + 10000).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-6">
                <Lock className="w-4 h-4 text-green-500" />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Your payment information is secure and encrypted
                </span>
              </div>

              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className={`w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isProcessing ? 'Processing...' : `Pay ₹${(total + 10000).toLocaleString()}`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;