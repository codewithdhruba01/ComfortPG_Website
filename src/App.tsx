import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import RoomDetails from './pages/RoomDetails';
import Cart from './pages/Cart';
import Payment from './pages/Payment';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import Contact from './pages/Contact';
import { Privacy, Terms, Funding, Partner, FAQ } from './pages/StaticPages';
import FindBroker from './pages/FindBroker';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <AppProvider>
      <Router>
        <ScrollToTop /> {/* ✅ Add here */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="room/:id" element={<RoomDetails />} />
            <Route path="find-broker" element={<FindBroker />} />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="funding" element={<Funding />} />
            <Route path="partner" element={<Partner />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;