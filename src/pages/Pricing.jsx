import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="pricing-page" style={{ paddingTop: '150px', paddingBottom: '120px' }}>
      
      {/* Header */}
      <section style={{ textAlign: 'center', paddingBottom: '60px' }}>
        <div className="container">
          <h3 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>PRICING</h3>
          <h1 style={{ fontSize: '4rem', textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '30px' }}>
            Simple, Transparent<br />
            <span style={{ color: 'var(--primary-color)' }}>Pricing</span>
          </h1>
          <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Choose the right plan to distribute, monetize, and promote your music globally. No hidden fees.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ paddingBottom: '100px' }}>
        <div className="container" style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
          
          {/* Free Tier */}
          <div className="pricing-card" style={{ flex: '1', minWidth: '300px', maxWidth: '400px', background: '#0a0a0a', padding: '50px 40px', borderRadius: '20px', border: '1px solid #1a1a1a', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Basic</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>$0<span style={{ fontSize: '1.2rem', color: '#888', fontWeight: 'normal' }}>/yr</span></div>
            <p style={{ color: '#888', marginBottom: '30px', height: '48px' }}>Perfect for artists getting started.</p>
            <button className="btn-secondary" style={{ width: '100%', padding: '15px', borderRadius: '5px', marginBottom: '40px', textTransform: 'uppercase', fontWeight: 'bold' }}>Get Started</button>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> Keep 80% Royalties</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> Unlimited Releases</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> Distribution to 50+ stores</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', color: '#555' }}><X size={20} /> Content ID</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', color: '#555' }}><X size={20} /> Vevo Channel Setup</li>
            </ul>
          </div>

          {/* Pro Tier (Highlighted) */}
          <div className="pricing-card" style={{ flex: '1', minWidth: '300px', maxWidth: '400px', background: 'linear-gradient(180deg, #1a0f00 0%, #0a0a0a 100%)', padding: '50px 40px', borderRadius: '20px', border: '2px solid var(--primary-color)', textAlign: 'center', position: 'relative', transform: 'scale(1.05)', zIndex: 1 }}>
            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', background: 'var(--primary-color)', color: '#000', padding: '5px 20px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Most Popular</div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Pro</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px', color: 'var(--primary-color)' }}>$19.99<span style={{ fontSize: '1.2rem', color: '#888', fontWeight: 'normal' }}>/yr</span></div>
            <p style={{ color: '#888', marginBottom: '30px', height: '48px' }}>For active artists who want full control.</p>
            <button className="btn-primary" style={{ width: '100%', padding: '15px', borderRadius: '5px', marginBottom: '40px', textTransform: 'uppercase', fontWeight: 'bold' }}>Upgrade to Pro</button>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> Keep 100% Royalties</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> Unlimited Releases</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> Distribution to 150+ stores</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> YouTube Content ID</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> Custom Pre-Saves</li>
            </ul>
          </div>

          {/* Premium Tier */}
          <div className="pricing-card" style={{ flex: '1', minWidth: '300px', maxWidth: '400px', background: '#0a0a0a', padding: '50px 40px', borderRadius: '20px', border: '1px solid #1a1a1a', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Premium</h3>
            <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '10px' }}>$39.99<span style={{ fontSize: '1.2rem', color: '#888', fontWeight: 'normal' }}>/yr</span></div>
            <p style={{ color: '#888', marginBottom: '30px', height: '48px' }}>For labels and managers with multiple artists.</p>
            <button className="btn-secondary" style={{ width: '100%', padding: '15px', borderRadius: '5px', marginBottom: '40px', textTransform: 'uppercase', fontWeight: 'bold' }}>Get Premium</button>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> All Pro Features</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> Up to 5 Artists</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> Royalty Splits</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> Vevo Channel Setup</li>
              <li style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}><Check size={20} color="var(--primary-color)" /> Priority Support</li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Pricing;
