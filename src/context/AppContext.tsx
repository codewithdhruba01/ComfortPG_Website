import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Room, CartItem, User } from '../types';

interface AppContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  cartItems: CartItem[];
  addToCart: (room: Room, checkIn: string, checkOut: string) => void;
  removeFromCart: (roomId: string) => void;
  clearCart: () => void;
  user: User | null;
  login: (email: string, password: string) => void;
  logout: () => void;
  signup: (name: string, email: string, password: string) => void;
  registeredUsers: { email: string; password: string; name: string }[];
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [user, setUser] = useState<User | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<{ email: string; password: string; name: string }[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const addToCart = (room: Room, checkIn: string, checkOut: string) => {
    const existingItem = cartItems.find(item => item.room.id === room.id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.room.id === room.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { room, quantity: 1, checkIn, checkOut }]);
    }
  };

  const removeFromCart = (roomId: string) => {
    setCartItems(cartItems.filter(item => item.room.id !== roomId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const login = (email: string, password: string) => {
    const registeredUser = registeredUsers.find(
      u => u.email === email && u.password === password
    );
    
    if (registeredUser) {
      setUser({
        id: '1',
        name: registeredUser.name,
        email: registeredUser.email,
        phone: '+91 9999999999'
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const signup = (name: string, email: string, password: string) => {
    const newUser = { email, password, name };
    setRegisteredUsers(prev => [...prev, newUser]);
    setUser({
      id: '1',
      name: name,
      email: email,
      phone: '+91 9999999999'
    });
    return true;
  };

  return (
    <AppContext.Provider value={{
      darkMode,
      toggleDarkMode,
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      user,
      login,
      logout,
      signup,
      registeredUsers,
      isLoading,
      setIsLoading
    }}>
      <div className={darkMode ? 'dark' : ''}>
        {children}
      </div>
    </AppContext.Provider>
  );
};