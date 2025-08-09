import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <main className="container hero" style={{ maxHeight: '520px', overflow: 'hidden' }}>
      <div className="hero-text" style={{ maxWidth: '500px' }}>
        <h1 style={{ fontSize: '38px', lineHeight: '1.25' }}>
          Your Personal, Secure Document & Photo Vault
        </h1>
        <p style={{ fontSize: '16px' }}>
          Upload once, access anywhere. Keep your memories and documents safe — forever.
        </p>

        <div className="cta">
          <button className="btn" onClick={() => navigate('/signup')}>
            Get Started Free
          </button>
          <button
            className="btn btn--ghost"
            onClick={() => alert('Demo coming soon!')}
          >
            Watch Demo
          </button>
        </div>
      </div>

      <div className="hero-art" style={{ textAlign: 'center' }}>
        <img
          src="/images/hero-illustration.png"
          alt="SafeNest secure vault illustration"
          className="hero-img"
          style={{ maxWidth: '90%', maxHeight: '360px', height: 'auto' }}
          onError={(e) => {
            e.target.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'hero-placeholder';
            placeholder.innerText = 'Illustration';
            e.target.parentNode.appendChild(placeholder);
          }}
        />
      </div>
    </main>
  );
}

export default Home;
