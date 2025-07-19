import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Phone, Video, MoreVertical } from 'lucide-react';
import { Broker, ChatMessage } from '../../types';
import { useApp } from '../../context/AppContext';

interface ChatModalProps {
  broker: Broker;
  isOpen: boolean;
  onClose: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ broker, isOpen, onClose }) => {
  const { darkMode } = useApp();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      senderId: broker.id,
      senderName: broker.name,
      message: `Hello! I'm ${broker.name}. How can I help you find the perfect PG accommodation today?`,
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      isUser: false
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        senderId: 'user',
        senderName: 'You',
        message: message.trim(),
        timestamp: new Date(),
        isUser: true
      };

      setMessages(prev => [...prev, newMessage]);
      setMessage('');

      // Simulate broker response
      setTimeout(() => {
        const responses = [
          "Thank you for your message! I'll help you find the best PG options in your preferred area.",
          "That's a great question! Let me check the available properties that match your requirements.",
          "I have several excellent options that might interest you. Would you like me to share the details?",
          "I understand your needs. Let me find properties with those specific amenities for you.",
          "Perfect! I can arrange a property visit for you. When would be convenient for you?"
        ];
        
        const brokerResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          senderId: broker.id,
          senderName: broker.name,
          message: responses[Math.floor(Math.random() * responses.length)],
          timestamp: new Date(),
          isUser: false
        };

        setMessages(prev => [...prev, brokerResponse]);
      }, 1000 + Math.random() * 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className={`w-full max-w-md h-[600px] ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl border shadow-2xl flex flex-col`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center space-x-3">
            <img
              src={broker.image}
              alt={broker.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {broker.name}
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {broker.area}, {broker.city}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'} transition-colors`}>
              <Phone className="w-4 h-4" />
            </button>
            <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'} transition-colors`}>
              <Video className="w-4 h-4" />
            </button>
            <button className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'} transition-colors`}>
              <MoreVertical className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-400' : 'hover:bg-gray-100 text-gray-500'} transition-colors`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${msg.isUser ? 'order-2' : 'order-1'}`}>
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    msg.isUser
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                      : darkMode
                      ? 'bg-gray-700 text-gray-200'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <p className="text-sm">{msg.message}</p>
                </div>
                <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'} ${msg.isUser ? 'text-right' : 'text-left'}`}>
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {!msg.isUser && (
                <img
                  src={broker.image}
                  alt={broker.name}
                  className="w-8 h-8 rounded-full object-cover order-1 mr-2 mt-auto"
                />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className={`flex-1 px-4 py-2 rounded-full border focus:ring-2 focus:ring-purple-500 ${
                darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
              }`}
            />
            <button
              onClick={handleSendMessage}
              disabled={!message.trim()}
              className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatModal;