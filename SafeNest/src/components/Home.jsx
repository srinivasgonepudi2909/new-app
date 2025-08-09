import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <main className="container hero">
      <div className="hero-text">
        <h1>Your Personal, Secure Document & Photo Vault</h1>
        <p>Upload once, access anywhere. Keep your memories and documents safe — forever.</p>

        <div className="cta">
          <button className="btn" onClick={() => navigate('/signup')}>Get Started Free</button>
          <button className="btn btn--ghost" onClick={() => alert('Demo coming soon!')}>Watch Demo</button>
        </div>
      </div>

      <div className="hero-art">
        {/* Replace with your image if you want */}
        <div className="hero-placeholder">Illustration</div>
      </div>
    </main>
  );
}

export default Home;
