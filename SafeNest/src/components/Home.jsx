import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const icons = [
    '/icons/create-account.png',
    '/icons/create-folders.png',
    '/icons/upload-files.png',
    '/icons/access-anywhere.png',
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero container">
        <div className="hero-grid">
          {/* Left: Headline */}
          <div className="hero-left">
            <h1 className="hero-title">
              Your Personal, Secure<br />Document & Photo Vault
            </h1>
          </div>

          {/* Center: Subtext + CTA */}
          <div className="hero-center">
            <p className="hero-sub">
              Upload once, access anywhere. Keep your memories and documents safe — forever.
            </p>
            <div className="hero-cta">
              <button className="btn btn--lg" onClick={() => navigate('/signup')}>
                Get Started Free
              </button>
              <button
                className="btn btn--ghost btn--lg"
                onClick={() => alert('Demo coming soon!')}
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right: Logo + Illustration */}
          <div className="hero-right">
            <div className="hero-logo">
              <img src="/images/safenest-logo.svg" alt="SafeNest Logo" />
            </div>
            <div className="hero-illustration">
              <img src="/images/hero-illustration.png" alt="SafeNest vault" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW THIS APP WORKS */}
      <section className="how container">
        <h3 className="how-title">How This App Works</h3>

        <div className="how-grid">
          {icons.map((src, index) => (
            <div key={index} className="how-card">
              <img className="how-icon only" src={src} alt={`Step ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
