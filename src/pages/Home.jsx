import React, { useState } from 'react'
import { Disc, Music2, Share2, Youtube, ChevronDown, Star, Award, TrendingUp, MonitorPlay, Play, AudioWaveform } from 'lucide-react'

// FAQ Accordion Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setIsOpen(!isOpen)} style={{ background: '#0a0a0a', padding: '25px', marginBottom: '15px', borderRadius: '10px', cursor: 'pointer', border: '1px solid #1a1a1a', transition: 'all 0.3s' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4 style={{ fontSize: '1.1rem', margin: 0, fontWeight: '500', color: isOpen ? 'var(--primary-color)' : '#fff', transition: 'color 0.3s' }}>{question}</h4>
        <ChevronDown size={20} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: '0.3s', color: 'var(--primary-color)' }} />
      </div>
      {isOpen && <p style={{ marginTop: '20px', color: '#888', fontSize: '1rem', lineHeight: '1.6' }}>{answer}</p>}
    </div>
  )
}

const Home = () => {
  const [activeTab, setActiveTab] = useState('rising');

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{ paddingTop: '220px', paddingBottom: '120px' }}>
        <div className="container" style={{ display: 'flex', gap: '60px', alignItems: 'center' }}>
          <div className="hero-content" style={{ flex: 1 }}>
            <div className="hero-subtitle" style={{ display: 'inline-block', padding: '8px 0', color: 'var(--primary-color)', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '15px' }}>Making Indie Really Independent</div>
            <h1 style={{ fontSize: '3.5rem', textAlign: 'left', marginBottom: '20px', lineHeight: '1.1', textTransform: 'uppercase' }}>WE DON'T DISTRIBUTE MUSIC,<br /> WE DISTRIBUTE <span style={{ color: '#fff' }}>FEELINGS</span> GLOBALLY WITH LOVE.</h1>
            <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '10px' }}>Be Really Independent With Digitube Network</p>
            <p style={{ textAlign: 'left', fontSize: '1rem', marginBottom: '40px', color: '#aaa', lineHeight: '1.6' }}>Distribute to Spotify, Apple Music, YouTube, and more. Keep 100% ownership and revenue from all digital stores. Share your music with the world!</p>
            <div className="hero-buttons" style={{ justifyContent: 'flex-start' }}>
              <button className="btn-primary" style={{ padding: '15px 35px', fontSize: '1rem', textTransform: 'uppercase', borderRadius: '5px' }}>Start 30 Days Free Trial</button>
            </div>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ width: '100%', maxWidth: '550px', borderRadius: '24px', overflow: 'hidden' }}>
              <img src="/hero_floating_cards.jpg" alt="App interface" style={{ width: '100%', display: 'block', transform: 'scale(1.08)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section style={{ padding: '60px 0', background: '#0a0a0a', borderTop: '1px solid #111' }}>
        <div className="container">
          <div className="partners-logos" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap', opacity: 0.7 }}>
            <img src="https://hardanmusic.com/flies/2024/11/66af509cd3076ed98e01769c_apple.webp" alt="Apple Music" style={{ height: '35px', filter: 'grayscale(100%)' }} />
            <img src="https://hardanmusic.com/flies/2024/11/66af509c1da979ff4ba09e63_spotify.webp" alt="Spotify" style={{ height: '35px', filter: 'grayscale(100%)' }} />
            <img src="https://hardanmusic.com/flies/2024/11/66af509cdba6c4f6a06ce615_youtube.webp" alt="YouTube" style={{ height: '35px', filter: 'grayscale(100%)' }} />
            <img src="https://hardanmusic.com/flies/2024/11/66af509ce30b267f537d7dbc_jio.webp" alt="JioSaavn" style={{ height: '35px', filter: 'grayscale(100%)' }} />
            <img src="https://hardanmusic.com/flies/2024/11/66af509ceb7eaac4d19cd557_anghami.webp" alt="Anghami" style={{ height: '35px', filter: 'grayscale(100%)' }} />
          </div>
        </div>
      </section>

      {/* Main Banner */}
      <section className="main-banner-section" style={{ padding: '0', marginBottom: '0px' }}>
        <div className="main-banner-bg" style={{ width: '100%', height: '300px', background: 'url(https://hardanmusic.com/flies/2025/09/banner.jpg) center/cover no-repeat', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))' }}></div>
          <h2 className="main-banner-text" style={{ position: 'relative', zIndex: 1, fontWeight: '800', textAlign: 'center', letterSpacing: '1px' }}>Release Your Music<br />Globally On <span style={{ fontStyle: 'italic', color: '#fff' }}>150+ PLATFORMS</span></h2>
        </div>
      </section>

      {/* Commercialize Section */}
      <section style={{ padding: '80px 0', background: '#050505', borderTop: '1px solid #111' }}>
        <div className="container flex-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>COMMERCIALIZE</h3>
            <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '25px', lineHeight: '1.1' }}>Sell Globally,<br />Earn More!</h2>
            <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6' }}>Take your music global and unlock new revenue streams with our effortless distribution and monetization tools.</p>
            <button className="btn-secondary" style={{ padding: '15px 35px', borderRadius: '5px', textTransform: 'uppercase' }}>Explore Features</button>
          </div>
          <div style={{ flex: 1, minWidth: '300px', textAlign: 'right' }}>
            <div style={{ width: '100%', maxWidth: '500px', borderRadius: '24px', background: 'linear-gradient(145deg, #131313, #0a0a0a)', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.05)', padding: '30px', position: 'relative', overflow: 'hidden' }}>

              {/* Premium Glow Effect */}
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--primary-color)', filter: 'blur(100px)', opacity: 0.2, borderRadius: '50%' }}></div>
              <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '150px', height: '150px', background: '#4dabf5', filter: 'blur(100px)', opacity: 0.15, borderRadius: '50%' }}></div>

              {/* Dashboard Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px', position: 'relative', zIndex: 1 }}>
                <div>
                  <p style={{ color: '#888', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '5px' }}>Total Revenue</p>
                  <h4 style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 'bold', margin: 0, letterSpacing: '-1px' }}>$45,231<span style={{ color: '#666', fontSize: '1.5rem' }}>.89</span></h4>
                </div>
                <div style={{ background: 'rgba(29, 185, 84, 0.1)', color: '#1db954', padding: '6px 12px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <TrendingUp size={14} /> +12.5%
                </div>
              </div>

              {/* Smooth Gradient Chart */}
              <div style={{ position: 'relative', height: '140px', marginBottom: '20px', zIndex: 1 }}>
                <svg width="100%" height="100%" viewBox="0 0 400 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="var(--primary-color)" />
                      <stop offset="100%" stopColor="#ffb86c" />
                    </linearGradient>
                    <linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--primary-color)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--primary-color)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,100 C50,90 80,40 130,50 C180,60 220,20 280,30 C330,40 370,10 400,15" fill="none" stroke="url(#lineGrad)" strokeWidth="4" strokeLinecap="round" style={{ filter: 'drop-shadow(0 8px 8px rgba(247,140,27,0.3))' }} />
                  <path d="M0,100 C50,90 80,40 130,50 C180,60 220,20 280,30 C330,40 370,10 400,15 L400,120 L0,120 Z" fill="url(#fillGrad)" />
                </svg>

                {/* Floating Tooltip 1 */}
                <div style={{ position: 'absolute', top: '25px', left: '100px', background: 'rgba(20,20,20,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
                  <div style={{ width: '8px', height: '8px', background: '#1db954', borderRadius: '50%' }}></div>
                  <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>1.2M</span>
                </div>

                {/* Floating Tooltip 2 */}
                <div style={{ position: 'absolute', top: '5px', right: '80px', background: 'rgba(20,20,20,0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '8px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 10px 20px rgba(0,0,0,0.5)' }}>
                  <div style={{ width: '8px', height: '8px', background: '#ff0000', borderRadius: '50%' }}></div>
                  <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 'bold' }}>850K</span>
                </div>
              </div>

              {/* Glassmorphism Platform Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', position: 'relative', zIndex: 1 }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '15px', display: 'flex', alignItems: 'center', gap: '12px', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ background: 'rgba(29, 185, 84, 0.1)', padding: '8px', borderRadius: '50%' }}><Music2 size={18} color="#1db954" /></div>
                  <div>
                    <p style={{ color: '#888', fontSize: '0.75rem', marginBottom: '2px' }}>Spotify Streams</p>
                    <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 'bold' }}>1,245,892</p>
                  </div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', padding: '15px', display: 'flex', alignItems: 'center', gap: '12px', transition: 'transform 0.3s', cursor: 'pointer' }} onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                  <div style={{ background: 'rgba(255, 0, 0, 0.1)', padding: '8px', borderRadius: '50%' }}><Youtube size={18} color="#ff0000" /></div>
                  <div>
                    <p style={{ color: '#888', fontSize: '0.75rem', marginBottom: '2px' }}>YouTube Views</p>
                    <p style={{ color: '#fff', fontSize: '1rem', fontWeight: 'bold' }}>854,210</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhance Section */}
      <section style={{ padding: '80px 0', background: '#0a0a0a', borderTop: '1px solid #111' }}>
        <div className="container flex-container reverse" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px', flexDirection: 'row-reverse' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>ENHANCE</h3>
            <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '25px', lineHeight: '1.1' }}>Boost Your Reach By<br />Connecting With<br />Your Fans!</h2>
            <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6' }}>From pre-save links to detailed analytics, our promotion tools help you grow your audience and keep them engaged throughout your music journey.</p>
            <button className="btn-secondary" style={{ padding: '15px 35px', borderRadius: '5px', textTransform: 'uppercase' }}>Explore Features</button>
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <div style={{ width: '100%', maxWidth: '450px', height: '400px', borderRadius: '24px', background: '#0a0a0a', border: '1px solid #1a1a1a', position: 'relative', overflow: 'hidden' }}>

              {/* Abstract Play Component */}
              <div style={{ position: 'absolute', top: '40px', left: '30px', width: '220px', height: '60px', background: '#ff7e27', borderRadius: '30px', display: 'flex', alignItems: 'center', padding: '0 20px', gap: '20px' }}>
                <div style={{ flex: 1, height: '4px', background: 'rgba(0,0,0,0.3)', borderRadius: '2px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-6px', left: '30%', width: '16px', height: '16px', background: '#fff', borderRadius: '50%' }}></div>
                </div>
                <div style={{ width: '0', height: '0', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '16px solid #fff' }}></div>
                <div style={{ display: 'flex', gap: '4px' }}>
                  <div style={{ width: '6px', height: '18px', background: '#fff', borderRadius: '2px' }}></div>
                  <div style={{ width: '6px', height: '18px', background: '#fff', borderRadius: '2px' }}></div>
                </div>
              </div>

              {/* ZigZag Line */}
              <div style={{ position: 'absolute', top: '40px', right: '60px' }}>
                <svg width="60" height="40" viewBox="0 0 60 40">
                  <path d="M0,40 L15,10 L30,25 L45,0 L60,15" fill="none" stroke="#4dabf5" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Knob Component */}
              <div style={{ position: 'absolute', top: '100px', right: '50px', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '36px', height: '36px', background: '#fff9e6', borderRadius: '50%', zIndex: 2 }}></div>
                {[...Array(12)].map((_, i) => (
                  <div key={i} style={{ position: 'absolute', width: '4px', height: '12px', background: '#ff7e27', borderRadius: '2px', transform: `rotate(${i * 30}deg) translateY(-28px)` }}></div>
                ))}
              </div>

              {/* Two Dots */}
              <div style={{ position: 'absolute', top: '140px', left: '110px', display: 'flex', gap: '15px' }}>
                <div style={{ width: '24px', height: '24px', background: '#fff9e6', borderRadius: '50%' }}></div>
                <div style={{ width: '24px', height: '24px', background: '#fff9e6', borderRadius: '50%' }}></div>
              </div>

              {/* Abstract Sliders Component */}
              <div style={{ position: 'absolute', top: '160px', left: '30px', width: '180px', height: '120px', background: '#ff7e27', borderRadius: '20px', display: 'flex', alignItems: 'center', padding: '0 20px', gap: '15px' }}>
                <div style={{ width: '50px', height: '50px', background: '#e5b340', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '50%', height: '100%', background: '#45a29e', borderRadius: '25px 0 0 25px', position: 'absolute', left: 0 }}></div>
                  <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%', zIndex: 1 }}></div>
                </div>

                <div style={{ display: 'flex', gap: '20px', height: '70px', marginTop: '10px' }}>
                  <div style={{ width: '4px', height: '100%', background: '#fff', borderRadius: '2px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '10px', left: '-8px', width: '20px', height: '6px', background: '#45a29e', borderRadius: '3px' }}></div>
                  </div>
                  <div style={{ width: '4px', height: '100%', background: '#fff', borderRadius: '2px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '40px', left: '-8px', width: '20px', height: '6px', background: '#45a29e', borderRadius: '3px' }}></div>
                  </div>
                  <div style={{ width: '4px', height: '100%', background: '#fff', borderRadius: '2px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '25px', left: '-8px', width: '20px', height: '6px', background: '#45a29e', borderRadius: '3px' }}></div>
                  </div>
                </div>
              </div>

              {/* Pie Chart Component */}
              <div style={{ position: 'absolute', bottom: '30px', right: '40px', width: '130px', height: '130px', background: '#84c56e', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <div style={{ width: '90px', height: '90px', borderRadius: '50%', position: 'relative', overflow: 'hidden', background: '#fff' }}>
                  <div style={{ position: 'absolute', width: '100%', height: '100%', background: 'conic-gradient(#ff7e27 0% 45%, #fff9e6 45% 75%, #4dabf5 75% 100%)' }}></div>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '30px', height: '30px', background: '#84c56e', borderRadius: '50%' }}></div>
                </div>
              </div>

              {/* Bottom ZigZag */}
              <div style={{ position: 'absolute', bottom: '60px', left: '70px' }}>
                <svg width="80" height="30" viewBox="0 0 80 30">
                  <path d="M0,15 L15,0 L30,15 L45,0 L60,15 L80,5" fill="none" stroke="#253578" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section style={{ padding: '80px 0', background: '#050505', borderTop: '1px solid #111' }}>
        <div className="container flex-container" style={{ display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>FEATURES</h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
              <h2 className="section-title" style={{ fontSize: '3.5rem', lineHeight: '1.1' }}>EVERYTHING YOU NEED,<br /> JUST A CLICK AWAY</h2>
              <button className="btn-secondary" style={{ padding: '10px 25px', borderRadius: '5px', fontSize: '0.9rem', textTransform: 'uppercase', whiteSpace: 'nowrap', marginTop: '10px' }}>Explore All</button>
            </div>

            <div className="tabs" style={{ marginBottom: '50px', display: 'flex', gap: '15px', background: '#111', padding: '10px', borderRadius: '40px', flexWrap: 'wrap' }}>
              <button
                className={`tab-btn ${activeTab === 'rising' ? 'active' : ''}`}
                onClick={() => setActiveTab('rising')}
                style={{ border: 'none', padding: '12px 30px', fontWeight: 'bold', flex: 1 }}
              >
                Rising Talent
              </button>
              <button
                className={`tab-btn ${activeTab === 'recognized' ? 'active' : ''}`}
                onClick={() => setActiveTab('recognized')}
                style={{ border: 'none', padding: '12px 30px', fontWeight: 'bold', flex: 1 }}
              >
                Recognized Artists
              </button>
            </div>

            {activeTab === 'rising' && (
              <div className="features-grid">
                <div className="feature-card" style={{ padding: 0, background: 'transparent' }}>
                  <div className="feature-icon" style={{ marginBottom: '20px', width: '50px', height: '50px' }}><Share2 size={24} /></div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Drop Your Beats Anytime, Anywhere</h3>
                  <p style={{ fontSize: '1rem', color: '#888', lineHeight: '1.5' }}>Discover the Top Music Distribution Platform and Share Your Sound with the World.</p>
                </div>
                <div className="feature-card" style={{ padding: 0, background: 'transparent' }}>
                  <div className="feature-icon" style={{ marginBottom: '20px', width: '50px', height: '50px' }}><Youtube size={24} /></div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Transform Your Music into Earnings</h3>
                  <p style={{ fontSize: '1rem', color: '#888', lineHeight: '1.5' }}>Learn How to Sell Your Music Online and Start Earning with Ease.</p>
                </div>
                <div className="feature-card" style={{ padding: 0, background: 'transparent' }}>
                  <div className="feature-icon" style={{ marginBottom: '20px', width: '50px', height: '50px' }}><Music2 size={24} /></div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Amplify Your Reach with Tools</h3>
                  <p style={{ fontSize: '1rem', color: '#888', lineHeight: '1.5' }}>Leverage integrated promotional tools to connect with your fans and expand your audience.</p>
                </div>
                <div className="feature-card" style={{ padding: 0, background: 'transparent' }}>
                  <div className="feature-icon" style={{ marginBottom: '20px', width: '50px', height: '50px' }}><Disc size={24} /></div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Maximize and Simplify Your Revenue</h3>
                  <p style={{ fontSize: '1rem', color: '#888', lineHeight: '1.5' }}>Effortlessly track and collect your income with streamlined royalty management systems.</p>
                </div>
              </div>
            )}

            {activeTab === 'recognized' && (
              <div className="features-grid">
                <div className="feature-card" style={{ padding: 0, background: 'transparent' }}>
                  <div className="feature-icon" style={{ marginBottom: '20px', width: '50px', height: '50px' }}><Star size={24} /></div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Exclusive Access to Elite</h3>
                  <p style={{ fontSize: '1rem', color: '#888', lineHeight: '1.5' }}>Become part of an exclusive artist collective, unlocking funding and unique opportunities.</p>
                </div>
                <div className="feature-card" style={{ padding: 0, background: 'transparent' }}>
                  <div className="feature-icon" style={{ marginBottom: '20px', width: '50px', height: '50px' }}><MonitorPlay size={24} /></div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Sync Licensing</h3>
                  <p style={{ fontSize: '1rem', color: '#888', lineHeight: '1.5' }}>Unlock exclusive sync licensing opportunities to have your music featured in films and TV.</p>
                </div>
                <div className="feature-card" style={{ padding: 0, background: 'transparent' }}>
                  <div className="feature-icon" style={{ marginBottom: '20px', width: '50px', height: '50px' }}><Award size={24} /></div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Editorial Playlists</h3>
                  <p style={{ fontSize: '1rem', color: '#888', lineHeight: '1.5' }}>Reach the right audience by pitching your tracks to top editorial playlists on Spotify.</p>
                </div>
                <div className="feature-card" style={{ padding: 0, background: 'transparent' }}>
                  <div className="feature-icon" style={{ marginBottom: '20px', width: '50px', height: '50px' }}><TrendingUp size={24} /></div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '15px' }}>Your Sound, Our Reach</h3>
                  <p style={{ fontSize: '1rem', color: '#888', lineHeight: '1.5' }}>Boost your music's reach with our in-house marketing powerhouse using targeted campaigns.</p>
                </div>
              </div>
            )}
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '300px' }}>
            <div style={{ width: '100%', maxWidth: '500px', height: '450px', position: 'relative' }}>

              {/* Tab 1: Rising Talent - Floating Cards */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: activeTab === 'rising' ? 1 : 0, transform: activeTab === 'rising' ? 'scale(1)' : 'scale(0.95)', transition: 'all 0.5s ease', pointerEvents: activeTab === 'rising' ? 'auto' : 'none' }}>

                {/* Central Vertical Card */}
                <div style={{ position: 'absolute', top: '15%', left: '30%', width: '160px', height: '240px', background: 'linear-gradient(145deg, #1f1b2e, #130f1c)', border: '1px solid #332b4d', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <div style={{ width: '80px', height: '80px', background: 'rgba(255, 126, 39, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                    <Music2 size={40} color="#ff7e27" />
                  </div>
                  <div style={{ width: '60%', height: '8px', background: '#332b4d', borderRadius: '4px', marginBottom: '8px' }}></div>
                  <div style={{ width: '40%', height: '8px', background: '#332b4d', borderRadius: '4px' }}></div>
                </div>

                {/* Top Left Waveform */}
                <div style={{ position: 'absolute', top: '5%', left: '0', width: '140px', height: '60px', background: '#2c1e4a', border: '1px solid #4a3375', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 15px 30px rgba(0,0,0,0.4)', zIndex: 1 }}>
                  <svg width="120" height="30" viewBox="0 0 120 30">
                    <path d="M0,15 L20,15 L30,5 L40,25 L50,15 L60,15 L70,0 L80,30 L90,15 L120,15" fill="none" stroke="#ff7e27" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 5px rgba(255,126,39,0.8))' }} />
                  </svg>
                </div>

                {/* Middle Left Chart */}
                <div style={{ position: 'absolute', top: '35%', left: '-10%', width: '130px', height: '90px', background: '#1c1b2e', border: '1px solid #332b4d', borderRadius: '15px', padding: '15px', boxShadow: '0 15px 30px rgba(0,0,0,0.4)', zIndex: 3 }}>
                  <svg width="100%" height="100%" viewBox="0 0 100 60" preserveAspectRatio="none">
                    <path d="M0,50 L20,30 L40,40 L70,10 L100,20" fill="none" stroke="#4dabf5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0,60 L30,40 L50,50 L80,20 L100,10" fill="none" stroke="#1db954" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Bottom Left Waveform */}
                <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '130px', height: '60px', background: '#ff7e27', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 15px 30px rgba(0,0,0,0.4)', zIndex: 1 }}>
                  <svg width="100" height="30" viewBox="0 0 100 30">
                    <path d="M0,15 L10,5 L20,25 L30,10 L40,20 L50,5 L60,25 L70,10 L80,20 L90,5 L100,15" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Top Right DJ Card */}
                <div style={{ position: 'absolute', top: '20%', right: '0', width: '140px', height: '140px', background: 'linear-gradient(145deg, #ff7e27, #e65c00)', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.4)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
                  <Disc size={50} color="#fff" />
                  <div style={{ width: '50px', height: '6px', background: 'rgba(255,255,255,0.3)', borderRadius: '3px', marginTop: '15px' }}></div>
                </div>

                {/* Bottom Right Pie Chart Card */}
                <div style={{ position: 'absolute', bottom: '15%', right: '10%', width: '150px', height: '100px', background: '#2c1e4a', border: '1px solid #4a3375', borderRadius: '20px', boxShadow: '0 15px 30px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'conic-gradient(#ff7e27 0% 30%, #4dabf5 30% 70%, #e1306c 70% 100%)' }}></div>
                  <div style={{ marginLeft: '15px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ width: '30px', height: '4px', background: '#ff7e27', borderRadius: '2px' }}></div>
                    <div style={{ width: '40px', height: '4px', background: '#4dabf5', borderRadius: '2px' }}></div>
                    <div style={{ width: '25px', height: '4px', background: '#e1306c', borderRadius: '2px' }}></div>
                  </div>
                </div>
              </div>

              {/* Tab 2: Recognized Artists - Floating Cards */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: activeTab === 'recognized' ? 1 : 0, transform: activeTab === 'recognized' ? 'scale(1)' : 'scale(0.95)', transition: 'all 0.5s ease', pointerEvents: activeTab === 'recognized' ? 'auto' : 'none' }}>

                {/* Central Award Card */}
                <div style={{ position: 'absolute', top: '15%', left: '25%', width: '220px', height: '160px', background: 'linear-gradient(145deg, #1c3d5a, #0a1f30)', border: '1px solid #2a5276', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <Award size={60} color="#fca120" />
                  <div style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '15px' }}>Elite Access</div>
                </div>

                {/* Floating Stars */}
                <div style={{ position: 'absolute', top: '5%', left: '10%', background: 'rgba(252, 161, 32, 0.2)', padding: '15px', borderRadius: '50%', zIndex: 1 }}>
                  <Star size={30} color="#fca120" />
                </div>
                <div style={{ position: 'absolute', bottom: '15%', right: '5%', background: 'rgba(77, 171, 245, 0.2)', padding: '20px', borderRadius: '50%', zIndex: 1 }}>
                  <TrendingUp size={40} color="#4dabf5" />
                </div>

                {/* Bottom Left Chart Card */}
                <div style={{ position: 'absolute', bottom: '20%', left: '0', width: '160px', height: '100px', background: '#1c1b2e', border: '1px solid #332b4d', borderRadius: '15px', display: 'flex', alignItems: 'flex-end', padding: '15px', gap: '8px', boxShadow: '0 15px 30px rgba(0,0,0,0.4)', zIndex: 3 }}>
                  <div style={{ width: '20px', height: '40%', background: '#4dabf5', borderRadius: '3px' }}></div>
                  <div style={{ width: '20px', height: '60%', background: '#fca120', borderRadius: '3px' }}></div>
                  <div style={{ width: '20px', height: '80%', background: '#1db954', borderRadius: '3px' }}></div>
                  <div style={{ width: '20px', height: '100%', background: '#e1306c', borderRadius: '3px' }}></div>
                </div>

                {/* Top Right Video Card */}
                <div style={{ position: 'absolute', top: '35%', right: '0', width: '180px', height: '120px', background: 'linear-gradient(145deg, #2c1e4a, #130f1c)', border: '1px solid #4a3375', borderRadius: '15px', boxShadow: '0 15px 30px rgba(0,0,0,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                  <div style={{ width: '60px', height: '40px', background: '#ff0000', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play size={20} color="#fff" fill="#fff" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', background: '#0a0a0a', borderTop: '1px solid #111' }}>
        <div className="container flex-container" style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>JOIN US</h3>
            <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '25px', lineHeight: '1.1' }}>Let Digitube Network Drive the Success of Your Next Release</h2>
            <p style={{ fontSize: '1.2rem', color: '#888', marginBottom: '40px' }}>Elevate your music with a platform designed to deliver results</p>
            <button className="btn-primary" style={{ padding: '18px 40px', fontSize: '1.1rem', borderRadius: '5px' }}>Join Us Today</button>
          </div>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', minWidth: '300px', overflow: 'hidden' }}>
            {/* Mock network graphic */}
            <div className="network-graphic" style={{ position: 'relative', width: '350px', height: '350px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className="rotating-ring" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, border: '1px dashed #333', borderRadius: '50%', animation: 'spin 20s linear infinite' }}>
                <div className="node" style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#1db954', width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #0a0a0a', overflow: 'hidden' }}>
                  <div style={{ animation: 'spin 20s linear infinite reverse', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Music2 size={30} color="#fff" /></div>
                </div>
                <div className="node" style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#ff0000', width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #0a0a0a', overflow: 'hidden' }}>
                  <div style={{ animation: 'spin 20s linear infinite reverse', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Youtube size={30} color="#fff" /></div>
                </div>
                <div className="node" style={{ position: 'absolute', left: '-25px', top: '50%', transform: 'translateY(-50%)', background: '#fff', width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #0a0a0a', overflow: 'hidden' }}>
                  <div style={{ animation: 'spin 20s linear infinite reverse', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Disc size={30} color="#000" /></div>
                </div>
                <div className="node" style={{ position: 'absolute', right: '-25px', top: '50%', transform: 'translateY(-50%)', background: '#3b5998', width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #0a0a0a', overflow: 'hidden' }}>
                  <div style={{ animation: 'spin 20s linear infinite reverse', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Share2 size={30} color="#fff" /></div>
                </div>
              </div>
              <div style={{ zIndex: 10, position: 'relative', width: '120px', height: '120px', background: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 0 30px rgba(247, 140, 27, 0.4)' }}>NETWORK</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '120px 0', background: '#050505', borderTop: '1px solid #111' }}>
        <div className="container flex-container" style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div className="faq-sticky-header" style={{ flex: 1, position: 'sticky', top: '120px', minWidth: '300px' }}>
            <h3 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>FAQs</h3>
            <h2 className="section-title" style={{ fontSize: '3.5rem', lineHeight: '1.1', marginBottom: '30px' }}>FREQUENTLY ASKED<br />QUESTIONS</h2>
            <p style={{ color: '#888', fontSize: '1.1rem' }}>Explore common questions about Digitube Network.</p>
          </div>
          <div style={{ flex: 1.5 }}>
            <FAQItem
              question="What is music distribution, and why is it important for independent artists?"
              answer="Music distribution is the process of getting your music onto platforms like Spotify, Apple Music, and other streaming services where listeners can discover and enjoy it. For independent artists, it’s essential because it bridges the gap between your music and a global audience."
            />
            <FAQItem
              question="What’s the process to sign up for Digitube Network’s distribution services?"
              answer="Joining Digitube Network is quick and easy. Select the plan that suits your needs, create an account, and you're all set! Once registered, you can start uploading your tracks and utilizing our powerful distribution tools."
            />
            <FAQItem
              question="Do I have the option to select the specific store where my music is released?"
              answer="We provide distribution to more than 100 music streaming, download, and social media platforms. You have the flexibility to release your music on all stores or even create your own custom selection."
            />
            <FAQItem
              question="Can I release music videos through Digitube Network?"
              answer="Absolutely! You can create a Vevo channel and distribute your official music videos with ease. Simply select the video option when setting up your release, and we’ll handle the rest."
            />
            <FAQItem
              question="What is the expected timeframe for approval of my release?"
              answer="While we can't provide an exact timeframe, rest assured that we will review your submission as quickly as possible. To ensure a smooth and speedy approval process, follow all metadata guidelines."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
