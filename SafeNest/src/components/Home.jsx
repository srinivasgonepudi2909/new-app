import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const steps = [
    {
      label: 'Create Your Account',
      icon: '/icons/create-account.png',
      //alt: 'Create Account',
    },
    {
      label: 'Create Folders',
      icon: '/icons/create-folders.png',
      //alt: 'Create Folders',
    },
    {
      label: 'Upload Files',
      icon: '/icons/upload-files.png',
      //alt: 'Upload Files',
    },
    {
      label: 'Access Anywhere',
      icon: '/icons/access-anywhere.png',
      //alt: 'Access Anywhere',
    },
  ];

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
          {steps.map((step, index) => (
            <div key={index} className="how-card">
              <img className="how-icon xlarge" src={step.icon} alt={step.alt} />
              <h4>{step.label}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
