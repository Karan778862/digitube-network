import React from 'react';
import { MonitorPlay, ListMusic, Link as LinkIcon } from 'lucide-react';

const Features = () => {
  return (
    <div className="features-page" style={{ paddingTop: '150px', paddingBottom: '120px' }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: 'center', paddingBottom: '80px', borderBottom: '1px solid #111' }}>
        <div className="container">
          <h3 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>FEATURES</h3>
          <h1 style={{ fontSize: '4rem', textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '30px' }}>
            Redefining Excellence in<br />
            <span style={{ color: 'var(--primary-color)' }}>Artist & Label Services</span>
          </h1>
          <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 40px' }}>
            Take full control of your music career with our top-tier suite of tools, crafted specifically for independent artists to succeed globally.
          </p>
          <button className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem', borderRadius: '5px' }}>Free Sign up</button>
          <a href="/pricing" style={{ color: '#fff', marginLeft: '20px', textDecoration: 'underline' }}>View Pricing</a>
        </div>
      </section>

      {/* Feature Blocks */}
      <section className="features-page" style={{ paddingTop: '100px' }}>
        <div className="container">
          {/* Feature 1: Sync */}
          <div className="flex-container feature-block-margin" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px', marginBottom: '120px' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{ width: '70px', height: '70px', background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <MonitorPlay size={32} color="var(--primary-color)" />
              </div>
              <h2 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.1' }}>Exclusive Sync<br />Opportunities</h2>
              <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: '1.6' }}>
                Broaden your audience with sync opportunities, featuring your music in films, TV shows, games, and commercials worldwide. Our dedicated sync team works to place your tracks where they matter.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'flex-end' }}>
               <div style={{ position: 'relative', width: '100%', height: '450px', maxWidth: '500px' }}>
                 {/* DJ / Creator Image (Top Right) */}
                 <div style={{ position: 'absolute', top: '0', right: '0', width: '55%', height: '55%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', backgroundColor: '#e87431' }}>
                   <img src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80" alt="DJ" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>

                 {/* Band / Artists Image (Bottom Left) */}
                 <div style={{ position: 'absolute', bottom: '0', left: '0', width: '65%', height: '55%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', backgroundColor: '#d98b48', zIndex: 2 }}>
                   <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&q=80" alt="Band" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>

                 {/* Headphones (Top Left) */}
                 <div style={{ position: 'absolute', top: '15%', left: '5%', width: '35%', height: '35%', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', backgroundColor: '#f2a81d', zIndex: 3 }}>
                   <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80" alt="Headphones" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>

                 {/* Instruments (Bottom Right) */}
                 <div style={{ position: 'absolute', bottom: '15%', right: '5%', width: '30%', height: '30%', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', backgroundColor: '#8a62a6', zIndex: 4 }}>
                   <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&q=80" alt="Instruments" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
               </div>
            </div>
          </div>

          {/* Feature 2: Playlist */}
          <div className="flex-container reverse feature-block-margin" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px', flexDirection: 'row-reverse', marginBottom: '120px' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{ width: '70px', height: '70px', background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ListMusic size={32} color="var(--primary-color)" />
              </div>
              <h2 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.1' }}>Editorial<br />Playlists</h2>
              <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: '1.6' }}>
                Get your tracks considered for top DSP playlists and grow your streams as your music connects with fresh audiences. We pitch directly to editorial teams on Spotify, Apple Music, and more.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
               <div style={{ position: 'relative', width: '100%', height: '450px', maxWidth: '500px' }}>
                 {/* Main Playlist/Phone Image (Center Left) */}
                 <div style={{ position: 'absolute', top: '10%', left: '0', width: '50%', height: '70%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', zIndex: 3, backgroundColor: '#1db954' }}>
                   <img src="https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&q=80" alt="Spotify" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>

                 {/* Person Listening (Top Right) */}
                 <div style={{ position: 'absolute', top: '0', right: '5%', width: '45%', height: '45%', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', zIndex: 2, backgroundColor: '#ff4b4b' }}>
                   <img src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=500&q=80" alt="Listening" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>

                 {/* Music equipment (Bottom Right) */}
                 <div style={{ position: 'absolute', bottom: '5%', right: '0', width: '55%', height: '45%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', zIndex: 1, backgroundColor: '#8a2be2' }}>
                   <img src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?w=600&q=80" alt="Music Gear" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>

                 {/* Stats / Charts (Bottom Left overlap) */}
                 <div style={{ position: 'absolute', bottom: '0', left: '25%', width: '30%', height: '25%', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', zIndex: 4, backgroundColor: '#f2a81d' }}>
                   <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" alt="Stats" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
               </div>
            </div>
          </div>

          {/* Feature 3: Fan Links */}
          <div className="flex-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <div style={{ width: '70px', height: '70px', background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <LinkIcon size={32} color="var(--primary-color)" />
              </div>
              <h2 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.1' }}>Smart<br />Fan Links</h2>
              <p style={{ color: '#888', fontSize: '1.2rem', lineHeight: '1.6' }}>
                Direct fans to their preferred platform with customized pre-save and smart links. Track conversions, understand your audience geography, and boost your first-week streaming numbers effortlessly.
              </p>
            </div>
            <div style={{ flex: 1, minWidth: '300px', display: 'flex', justifyContent: 'flex-end' }}>
               <div style={{ position: 'relative', width: '100%', height: '450px', maxWidth: '500px' }}>
                 {/* Analytics/Charts Image (Center Right) */}
                 <div style={{ position: 'absolute', top: '15%', right: '0', width: '55%', height: '60%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', zIndex: 2, backgroundColor: '#3b82f6' }}>
                   <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" alt="Analytics" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>

                 {/* Social Links / Phone (Top Left) */}
                 <div style={{ position: 'absolute', top: '0', left: '5%', width: '45%', height: '50%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', zIndex: 3, backgroundColor: '#e87431' }}>
                   <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=500&q=80" alt="Social Links" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>

                 {/* Fans / Audience (Bottom Left) */}
                 <div style={{ position: 'absolute', bottom: '5%', left: '0', width: '50%', height: '40%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', zIndex: 1, backgroundColor: '#10b981' }}>
                   <img src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=500&q=80" alt="Audience Connections" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>

                 {/* Fan Interaction (Bottom Right overlap) */}
                 <div style={{ position: 'absolute', bottom: '0', right: '25%', width: '35%', height: '35%', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', border: '4px solid #000', zIndex: 4, backgroundColor: '#f2a81d' }}>
                   <img src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=400&q=80" alt="Fan Interaction" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Features;
