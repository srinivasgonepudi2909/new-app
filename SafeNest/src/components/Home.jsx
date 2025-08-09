import React from 'react';
import { useNavigate } from 'react-router-dom';

function Badge({ text }) {
  return <span className="badge">{text}</span>;
}

function Stat({ big, small }) {
  return (
    <div className="stat">
      <div className="stat__big">{big}</div>
      <div className="stat__small">{small}</div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="hero container hero--wow">
        {/* LEFT */}
        <div className="hero-left">
          <div className="brand-hero">
            <img src="/images/logo.png" alt="SafeNest" className="brand-hero__logo" />
            <span className="brand-hero__name">SafeNest</span>
          </div>

          <h1 className="hero-title">
            Your Personal, Secure<br />Document & Photo Vault
          </h1>

          <p className="hero-sub">
            Upload once, access anywhere. Your documents and photos stay private to you —
            protected with enterprise-grade security.
          </p>

          <div className="hero-cta">
            <button className="btn btn--lg btn--pulse" onClick={() => navigate('/signup')}>
              Get Started Free
            </button>
            <button className="btn btn--ghost btn--lg" onClick={() => alert('Demo coming soon!')}>
              Watch Demo
            </button>
          </div>

          {/* Trust badges */}
          <div className="badges">
            <Badge text="AES-256 encryption" />
            <Badge text="Zero-knowledge design" />
            <Badge text="2-Factor ready" />
          </div>

          {/* Stats strip */}
          <div className="stats">
            <Stat big="10k+" small="happy users" />
            <Stat big="99.99%" small="uptime" />
            <Stat big="1M+" small="files secured" />
          </div>
        </div>

        {/* RIGHT — clean illustration only */}
        <div className="hero-right">
          <div className="hero-illustration hero-illustration--solid card-float">
            <img src="/images/hero-illustration.png" alt="SafeNest vault" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container how how--wow">
        <h3 className="how-title">HOW IT WORKS</h3>

        <ol className="how-steps grid-3">
          <li className="how-step glow">
            <img className="how-icon how-icon--blue" src="/icons/user.svg" alt="" />
            <div className="how-text">
              <h4>1. Create your personal SafeNest account</h4>
              <p className="muted">Sign up in seconds — no credit card required.</p>
            </div>
          </li>

          <li className="how-step glow">
            <img className="how-icon how-icon--blue" src="/icons/folder-plus.svg" alt="" />
            <div className="how-text">
              <h4>2. Make folders</h4>
              <p className="muted">‘PAN Card’, ‘Passport’, ‘Family Pics’ — keep life tidy.</p>
            </div>
          </li>

          <li className="how-step glow">
            <img className="how-icon how-icon--blue" src="/icons/upload.svg" alt="" />
            <div className="how-text">
              <h4>3. Upload once — view anywhere</h4>
              <p className="muted">Your vault works on laptop, tablet, and phone.</p>
            </div>
          </li>
        </ol>

        {/* Bottom CTA */}
        <div className="how-cta">
          <button className="btn btn--lg" onClick={() => navigate('/signup')}>Create Free Account</button>
        </div>
      </section>
    </>
  );
}

export default Home;
