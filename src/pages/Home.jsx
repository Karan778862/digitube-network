import React, { useState } from 'react'
import { Disc, Music2, Share2, Youtube, ChevronDown, Star, Award, TrendingUp, MonitorPlay } from 'lucide-react'

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
             <img src="https://hardanmusic.com/flies/2025/09/homepagemain.webp" alt="App interface" style={{ width: '100%', maxWidth: '550px', borderRadius: '24px' }} />
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section style={{ padding: '60px 0', background: '#0a0a0a', borderTop: '1px solid #111' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap', opacity: 0.7 }}>
            <img src="https://hardanmusic.com/flies/2024/11/66af509cd3076ed98e01769c_apple.webp" alt="Apple Music" style={{ height: '35px', filter: 'grayscale(100%)' }} />
            <img src="https://hardanmusic.com/flies/2024/11/66af509c1da979ff4ba09e63_spotify.webp" alt="Spotify" style={{ height: '35px', filter: 'grayscale(100%)' }} />
            <img src="https://hardanmusic.com/flies/2024/11/66af509cdba6c4f6a06ce615_youtube.webp" alt="YouTube" style={{ height: '35px', filter: 'grayscale(100%)' }} />
            <img src="https://hardanmusic.com/flies/2024/11/66af509ce30b267f537d7dbc_jio.webp" alt="JioSaavn" style={{ height: '35px', filter: 'grayscale(100%)' }} />
            <img src="https://hardanmusic.com/flies/2024/11/66af509ceb7eaac4d19cd557_anghami.webp" alt="Anghami" style={{ height: '35px', filter: 'grayscale(100%)' }} />
          </div>
        </div>
      </section>

      {/* Main Banner */}
      <section style={{ padding: '0', marginBottom: '120px' }}>
        <div style={{ width: '100%', height: '300px', background: 'url(https://hardanmusic.com/flies/2025/09/banner.jpg) center/cover no-repeat', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4))' }}></div>
          <h2 className="main-banner-text" style={{ position: 'relative', zIndex: 1, fontSize: '4rem', fontWeight: '800', textAlign: 'center', letterSpacing: '1px' }}>Release Your Music<br />Globally On <span style={{ fontStyle: 'italic', color: '#fff' }}>150+ PLATFORMS</span></h2>
        </div>
      </section>
      
      {/* Commercialize Section */}
      <section style={{ padding: '80px 0', background: '#050505', borderTop: '1px solid #111' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
             <h3 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>COMMERCIALIZE</h3>
             <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '25px', lineHeight: '1.1' }}>Sell Globally,<br />Earn More!</h2>
             <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6' }}>Take your music global and unlock new revenue streams with our effortless distribution and monetization tools.</p>
             <button className="btn-secondary" style={{ padding: '15px 35px', borderRadius: '5px', textTransform: 'uppercase' }}>Explore Features</button>
          </div>
          <div style={{ flex: 1, minWidth: '300px', textAlign: 'right' }}>
             <img src="https://hardanmusic.com/flies/2025/09/ChatGPT-Image-Sep-1-2025-02_17_08-PM.webp" alt="Commercialize" style={{ width: '100%', maxWidth: '480px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
          </div>
        </div>
      </section>

      {/* Enhance Section */}
      <section style={{ padding: '80px 0', background: '#0a0a0a', borderTop: '1px solid #111' }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px', flexDirection: 'row-reverse' }}>
          <div style={{ flex: 1, minWidth: '300px' }}>
             <h3 style={{ color: 'var(--primary-color)', fontSize: '1.1rem', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>ENHANCE</h3>
             <h2 className="section-title" style={{ fontSize: '3.5rem', marginBottom: '25px', lineHeight: '1.1' }}>Boost Your Reach By<br />Connecting With<br />Your Fans!</h2>
             <p style={{ color: '#888', fontSize: '1.2rem', marginBottom: '40px', lineHeight: '1.6' }}>From pre-save links to detailed analytics, our promotion tools help you grow your audience and keep them engaged throughout your music journey.</p>
             <button className="btn-secondary" style={{ padding: '15px 35px', borderRadius: '5px', textTransform: 'uppercase' }}>Explore Features</button>
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
             <img src="https://hardanmusic.com/flies/2025/09/newwlogo.webp" alt="Enhance" style={{ width: '100%', maxWidth: '480px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }} />
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section style={{ padding: '80px 0', background: '#050505', borderTop: '1px solid #111' }}>
        <div className="container" style={{ display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap' }}>
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
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', minWidth: '300px' }}>
            <img src={activeTab === 'rising' ? "https://hardanmusic.com/flies/2024/11/Gemini_Generated_Image_736iqg736iqg736i-1024x926.webp" : "https://hardanmusic.com/flies/2024/11/new-pic--1024x836.webp"} alt="Features Display" style={{ width: '100%', maxWidth: '500px', borderRadius: '24px', transition: 'all 0.5s ease' }} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 0', background: '#0a0a0a', borderTop: '1px solid #111' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
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
                 <div className="node" style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#1db954', width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #0a0a0a' }}></div>
                 <div className="node" style={{ position: 'absolute', bottom: '-25px', left: '50%', transform: 'translateX(-50%)', background: '#ff0000', width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #0a0a0a' }}></div>
                 <div className="node" style={{ position: 'absolute', left: '-25px', top: '50%', transform: 'translateY(-50%)', background: '#fff', width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></div>
                 <div className="node" style={{ position: 'absolute', right: '-25px', top: '50%', transform: 'translateY(-50%)', background: '#3b5998', width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #0a0a0a' }}></div>
               </div>
               <div style={{ zIndex: 10, position: 'relative', width: '120px', height: '120px', background: 'var(--primary-color)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: '0 0 30px rgba(247, 140, 27, 0.4)' }}>NETWORK</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '120px 0', background: '#050505', borderTop: '1px solid #111' }}>
        <div className="container" style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, position: 'sticky', top: '120px', minWidth: '300px' }}>
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
