import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetail from './pages/RoomDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Funding from './pages/Funding';
import Partner from './pages/Partner';
import FAQ from './pages/FAQ';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/room/:id" element={<RoomDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/funding" element={<Funding />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;