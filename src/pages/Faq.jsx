import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

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

const Faq = () => {
  return (
    <div className="faq-page" style={{ paddingTop: '150px', paddingBottom: '120px' }}>
      
      {/* Header */}
      <section style={{ textAlign: 'center', paddingBottom: '60px' }}>
        <div className="container">
          <h3 style={{ color: 'var(--primary-color)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>SUPPORT</h3>
          <h1 style={{ fontSize: '4rem', textTransform: 'uppercase', lineHeight: '1.1', marginBottom: '30px' }}>
            Frequently Asked<br />
            <span style={{ color: 'var(--primary-color)' }}>Questions</span>
          </h1>
          <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            Find answers to the most common questions about Digitube Network, our pricing, and how we can help you grow your music career.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section>
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
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
          <FAQItem 
            question="How do I get paid for my streams and downloads?" 
            answer="You retain up to 100% of your royalties depending on your selected pricing plan. Once your tracks generate revenue on stores like Spotify or Apple Music, the platforms report back to us. We will then process your earnings and you can withdraw your funds directly from your dashboard." 
          />
          <FAQItem 
            question="Are there any hidden fees or long-term contracts?" 
            answer="No! Digitube Network believes in simple, transparent pricing. You only pay for the yearly subscription you select, and there are no hidden fees. You have the freedom to cancel your subscription at any time." 
          />
        </div>
      </section>

    </div>
  )
}

export default Faq;
