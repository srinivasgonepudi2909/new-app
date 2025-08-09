import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="hero container">
        {/* LEFT: headline + copy + CTAs */}
        <div className="hero-left">
          <h1 className="hero-title">
            Your Personal, Secure<br />Document & Photo Vault
          </h1>

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

        {/* RIGHT: illustration only */}
        <div className="hero-right">
          <div className="hero-illustration">
            <img src="/images/hero-illustration.png" alt="SafeNest vault" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how container">
        <h3 className="how-title">HOW IT WORKS</h3>

        <ol className="how-steps">
          <li className="how-step">
            <img className="how-icon" src="/icons/user.svg" alt="" />
            <div className="how-text">
              <h4>1. Create your personal SafeNest account</h4>
            </div>
          </li>

          <li className="arrow" aria-hidden>→</li>

          <li className="how-step">
            <img className="how-icon" src="/icons/folder-plus.svg" alt="" />
            <div className="how-text">
              <h4>2. Make folders — 'PAN Card: Passport', 'Family Pics'</h4>
            </div>
          </li>

          <li className="arrow" aria-hidden>→</li>

          <li className="how-step">
            <img className="how-icon" src="/icons/upload.svg" alt="" />
            <div className="how-text">
              <h4>3. Upload docs/photos once — view them anywhere</h4>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}

export default Home;
