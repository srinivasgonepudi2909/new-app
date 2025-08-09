import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero container">
      {/* LEFT: Logo + welcome + how it works */}
      <div className="hero-left">
        <div className="brand-hero">
          <img src="/images/logo.png" alt="SafeNest" className="brand-hero__logo" />
          <span className="brand-hero__name">SafeNest</span>
        </div>

        <h1 className="hero-title">
          Your Personal, Secure<br />Document & Photo Vault
        </h1>

        <p className="hero-sub">
          Welcome to SafeNest. Upload once, access anywhere. Your documents and photos are protected
          with enterprise-grade security, designed to stay private to you — forever.
        </p>

        <div className="hero-cta">
          <button className="btn btn--lg" onClick={() => navigate('/signup')}>
            Get Started Free
          </button>
          <button className="btn btn--ghost btn--lg" onClick={() => alert('Demo coming soon!')}>
            Watch Demo
          </button>
        </div>

        {/* HOW IT WORKS under logo */}
        <div className="how-inline">
          <h3 className="how-title">HOW IT WORKS</h3>
          <ol className="how-steps">
            <li className="how-step">
              <img className="how-icon" src="/icons/user.svg" alt="" />
              <div className="how-text">
                <h4>1. Create your personal SafeNest account</h4>
              </div>
            </li>
            <li className="how-step">
              <img className="how-icon" src="/icons/folder-plus.svg" alt="" />
              <div className="how-text">
                <h4>2. Make folders — 'PAN Card', 'Passport', 'Family Pics'</h4>
              </div>
            </li>
            <li className="how-step">
              <img className="how-icon" src="/icons/upload.svg" alt="" />
              <div className="how-text">
                <h4>3. Upload docs/photos once — view them anywhere</h4>
              </div>
            </li>
          </ol>
        </div>
      </div>

      {/* RIGHT: Clean illustration image only */}
      <div className="hero-right">
        <div className="hero-illustration hero-illustration--solid">
          <img src="/images/hero-illustration.png" alt="SafeNest vault" />
        </div>
      </div>
    </section>
  );
}

export default Home;
