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
      <section style={{ paddingTop: '100px' }}>
        <div className="container">
          {/* Feature 1: Sync */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px', marginBottom: '120px' }}>
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
               <img src="https://hardanmusic.com/flies/2024/11/new-pic--1024x836.webp" alt="Sync" style={{ width: '100%', maxWidth: '500px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} />
            </div>
          </div>

          {/* Feature 2: Playlist */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px', flexDirection: 'row-reverse', marginBottom: '120px' }}>
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
               <img src="https://hardanmusic.com/flies/2025/09/ChatGPT-Image-Sep-1-2025-02_17_08-PM.webp" alt="Playlist" style={{ width: '100%', maxWidth: '500px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} />
            </div>
          </div>

          {/* Feature 3: Fan Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '80px' }}>
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
               <img src="https://hardanmusic.com/flies/2025/09/newwlogo.webp" alt="Fan Links" style={{ width: '100%', maxWidth: '500px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }} />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Features;
