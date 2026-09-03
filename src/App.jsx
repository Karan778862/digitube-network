import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin, Menu, X } from 'lucide-react';
import brandLogo from './assets/brand-logo.png';

// Import Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Faq from './pages/Faq';

// Layout Component
const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="container header-container">
          <div className="logo">
            <Link to="/">
              <img className='' src={brandLogo} alt="Digitube Network Logo" style={{ filter: 'invert(1)', height: '40px', objectFit: 'contain' }} />
            </Link>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={28} color="var(--primary-color)" /> : <Menu size={28} color="var(--primary-color)" />}
          </button>

          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <nav className="nav">
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/features" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
              <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
              <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
            </nav>
            <div className="header-buttons">
              <a href="#" className="btn btn-login">Login</a>
              <a href="#" className="btn btn-signup">Sign Up</a>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer" style={{ background: '#030303', borderTop: '2px solid #1a1a1a', padding: '80px 0 30px' }}>
        <div className="container">
          <div className="footer-grid" style={{ marginBottom: '50px' }}>
            <div className="footer-col" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#0a0a0a', padding: '30px', borderRadius: '15px', border: '1px solid #1a1a1a' }}>
              <img src={brandLogo} alt="Digitube Network Logo" style={{ filter: 'invert(1)', height: '45px', objectFit: 'contain' }} />
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px', textAlign: 'center' }}>Empowering independent artists globally.</p>
              <div className="social-icons" style={{ display: 'flex', gap: '15px' }}>
                <a href="#"><Facebook size={18} /></a>
                <a href="#"><Twitter size={18} /></a>
                <a href="#"><Instagram size={18} /></a>
                <a href="#"><Youtube size={18} /></a>
                <a href="#"><Linkedin size={18} /></a>
              </div>
            </div>
            <div className="footer-col">
              <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>Get In Touch</h4>
              <ul>
                <li><a href="mailto:info@digitubenetwork.com">info@digitubenetwork.com</a></li>
                <li><a href="mailto:support@digitubenetwork.com">support@digitubenetwork.com</a></li>
                <li><a href="tel:+919205978006">+91 92059 78006</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>Company</h4>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/forum">Forum</a></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="/terms">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '1px' }}>Useful Links</h4>
              <ul>
                <li><a href="/distribution">Music Distribution</a></li>
                <li><a href="/sync">Sync Licensing</a></li>
                <li><a href="/marketing">Marketing</a></li>
                <li><a href="/publishing">Music Publishing</a></li>
                <li><a href="/rights">Rights Management</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom" style={{ borderTop: '1px solid #1a1a1a', paddingTop: '30px', color: '#666' }}>
            <p>&copy; 2024 Digitube Network. All rights reserved. | <a href="/privacy" style={{ color: '#888' }}>Privacy Policy</a> | <a href="/terms" style={{ color: '#888' }}>Terms of Service</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
