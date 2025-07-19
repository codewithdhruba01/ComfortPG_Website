import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingCart, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

const Cart: React.FC = () => {
  const { darkMode, cartItems, removeFromCart, clearCart } = useApp();

  const total = cartItems.reduce((sum, item) => sum + (item.room.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <ShoppingCart className={`w-24 h-24 mx-auto mb-6 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
            <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Your Cart is Empty
            </h1>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
              Start browsing our rooms to add them to your cart.
            </p>
            <Link
              to="/rooms"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Browse Rooms</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Shopping Cart
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.room.id}
                className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border p-6`}
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.room.image}
                    alt={item.room.name}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                      {item.room.name}
                    </h3>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                      {item.room.type} • {item.room.size}
                    </p>
                    <div className="flex items-center space-x-4">
                      <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        ₹{item.room.price.toLocaleString()}/month
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Check-in: {new Date(item.checkIn).toLocaleDateString()}
                        </span>
                        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Check-out: {new Date(item.checkOut).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => removeFromCart(item.room.id)}
                      className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'} transition-colors`}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border p-6 sticky top-8`}>
              <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
                Order Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.room.id} className="flex justify-between">
                    <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.room.name}
                    </span>
                    <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      ₹{(item.room.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              <div className={`border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} pt-4 mb-6`}>
                <div className="flex justify-between items-center">
                  <span className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Total
                  </span>
                  <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    ₹{total.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  to="/payment"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center block"
                >
                  Proceed to Payment
                </Link>
                <button
                  onClick={clearCart}
                  className={`w-full ${darkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'} py-3 rounded-xl font-semibold transition-colors`}
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;