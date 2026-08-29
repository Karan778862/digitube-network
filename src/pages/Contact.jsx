import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="contact-page" style={{ paddingTop: '150px', paddingBottom: '120px' }}>
      
      {/* Header */}
      <section style={{ textAlign: 'center', paddingBottom: '60px' }}>
        <div className="container">
          <h3 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>CONTACT US</h3>
          <h1 style={{ fontSize: '4rem', textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '30px' }}>
            We'd Love To<br />
            <span style={{ color: 'var(--primary-color)' }}>Hear From You</span>
          </h1>
          <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Whether you have a question about our services, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
          
          {/* Contact Form */}
          <div style={{ flex: 1.5, minWidth: '300px', background: '#0a0a0a', padding: '50px', borderRadius: '20px', border: '1px solid #1a1a1a' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Send us a message</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', color: '#888' }}>First Name</label>
                  <input type="text" style={{ width: '100%', padding: '15px', background: '#000', border: '1px solid #333', borderRadius: '5px', color: '#fff', fontSize: '1rem' }} placeholder="John" />
                </div>
                <div style={{ flex: 1, minWidth: '200px' }}>
                  <label style={{ display: 'block', marginBottom: '10px', color: '#888' }}>Last Name</label>
                  <input type="text" style={{ width: '100%', padding: '15px', background: '#000', border: '1px solid #333', borderRadius: '5px', color: '#fff', fontSize: '1rem' }} placeholder="Doe" />
                </div>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#888' }}>Email Address</label>
                <input type="email" style={{ width: '100%', padding: '15px', background: '#000', border: '1px solid #333', borderRadius: '5px', color: '#fff', fontSize: '1rem' }} placeholder="john@example.com" />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#888' }}>Subject</label>
                <input type="text" style={{ width: '100%', padding: '15px', background: '#000', border: '1px solid #333', borderRadius: '5px', color: '#fff', fontSize: '1rem' }} placeholder="How can we help you?" />
              </div>
              <div style={{ marginBottom: '30px' }}>
                <label style={{ display: 'block', marginBottom: '10px', color: '#888' }}>Message</label>
                <textarea rows="6" style={{ width: '100%', padding: '15px', background: '#000', border: '1px solid #333', borderRadius: '5px', color: '#fff', fontSize: '1rem', resize: 'vertical' }} placeholder="Type your message here..."></textarea>
              </div>
              <button className="btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.1rem', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Send Message</button>
            </form>
          </div>

          {/* Contact Info */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '30px' }}>Contact Information</h2>
            
            <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
              <div style={{ width: '50px', height: '50px', background: '#111', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Mail size={24} color="var(--primary-color)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Email</h4>
                <p style={{ color: '#888', marginBottom: '5px' }}>Our friendly team is here to help.</p>
                <a href="mailto:info@digitubenetwork.com" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>info@digitubenetwork.com</a>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
              <div style={{ width: '50px', height: '50px', background: '#111', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MapPin size={24} color="var(--primary-color)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Office</h4>
                <p style={{ color: '#888', marginBottom: '5px' }}>Come say hello at our office HQ.</p>
                <span style={{ color: 'var(--primary-color)' }}>123 Music Ave, NY 10001, USA</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
              <div style={{ width: '50px', height: '50px', background: '#111', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Phone size={24} color="var(--primary-color)" />
              </div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '5px' }}>Phone</h4>
                <p style={{ color: '#888', marginBottom: '5px' }}>Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+1234567890" style={{ color: 'var(--primary-color)', textDecoration: 'none' }}>+1 (234) 567-890</a>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ marginTop: '50px' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '15px' }}>
                <a href="#" style={{ width: '40px', height: '40px', background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s' }} className="social-icon-btn"><Facebook size={18} /></a>
                <a href="#" style={{ width: '40px', height: '40px', background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s' }} className="social-icon-btn"><Twitter size={18} /></a>
                <a href="#" style={{ width: '40px', height: '40px', background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s' }} className="social-icon-btn"><Instagram size={18} /></a>
                <a href="#" style={{ width: '40px', height: '40px', background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', transition: 'all 0.3s' }} className="social-icon-btn"><Linkedin size={18} /></a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact;
