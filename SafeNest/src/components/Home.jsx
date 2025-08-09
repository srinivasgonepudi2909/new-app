import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* HERO */}
      <section className="hero container">
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

        <div className="hero-right">
          <div className="hero-illustration">
            <img src="/images/hero-illustration.png" alt="SafeNest vault" />
          </div>
        </div>
      </section>

      {/* HOW THIS APP WORKS */}
      <section className="how container">
        <h3 className="how-title">How This App Works</h3>

        <div className="how-grid">
          <div className="how-card">
            <img className="how-icon large" src="/icons/create-account.png" alt="Create Account" />
            <h4>Create Your Account</h4>
            <p>Sign up securely to start storing your documents and photos.</p>
          </div>

          <div className="how-card">
            <img className="how-icon large" src="/icons/create-folders.png" alt="Create Folders" />
            <h4>Create Folders</h4>
            <p>Organize your uploads into folders like “Files” and “Photos”.</p>
          </div>

          <div className="how-card">
            <img className="how-icon large" src="/icons/upload-files.png" alt="Upload Files" />
            <h4>Upload Files</h4>
            <p>Upload your documents and photos into the right folders.</p>
          </div>

          <div className="how-card">
            <img className="how-icon large" src="/icons/access-anywhere.png" alt="Access Anywhere" />
            <h4>Access Anywhere</h4>
            <p>Your files are safe and available wherever you go.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
