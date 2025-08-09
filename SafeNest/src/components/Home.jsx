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
        <h3 className="how-title">BLUE LOGS</h3>

        <ol className="how-steps">
          <li className="how-step blue-log">
            <img className="how-icon" src="/icons/user.svg" alt="" />
            <div className="how-text">
              <h4>1. Create your personal SafeNest account</h4>
              <p>Sign up securely to start storing your documents and photos.</p>
            </div>
          </li>

          <li className="arrow yellow-arrow" aria-hidden>→</li>

          <li className="how-step blue-log">
            <img className="how-icon" src="/icons/folder-plus.svg" alt="" />
            <div className="how-text">
              <h4>2. Make folders — 'PAN Card: Passport', 'Family Pics'</h4>
              <p>Organize your uploads into meaningful categories.</p>
            </div>
          </li>

          <li className="arrow yellow-arrow" aria-hidden>→</li>

          <li className="how-step blue-log">
            <img className="how-icon" src="/icons/upload.svg" alt="" />
            <div className="how-text">
              <h4>3. Upload docs/photos once — view them anywhere</h4>
              <p>Access your files from any device, anytime.</p>
            </div>
          </li>
        </ol>
      </section>
    </>
  );
}

export default Home;
