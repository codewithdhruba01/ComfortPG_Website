import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import { useApp } from '../../context/AppContext';

const Layout: React.FC = () => {
  const { darkMode, isLoading } = useApp();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} animate-fadeIn`}>
      <Navbar />
      <main className="pt-16 animate-slideUp">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;