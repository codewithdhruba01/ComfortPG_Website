import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import FeaturesSection from '../components/Home/FeaturesSection';
import TestimonialsSection from '../components/Home/TestimonialsSection';
import StatsSection from '../components/Home/StatsSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;