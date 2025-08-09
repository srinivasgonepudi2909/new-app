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

          {/* Center: Cartoon Logo */}
          <div className="hero-center">
            <div className="hero-illustration">
              <img src="/images/safenest-cartoon.png" alt="SafeNest cartoon logo" />
            </div>
          </div>

          {/* Right: Rotating Icons */}
          <div className="hero-right">
            <div className="rotating-icons">
              <img src="/icons/pdf.png" alt="PDF" className="rotating-icon" />
              <img src="/icons/photo.png" alt="Photo" className="rotating-icon" />
              <img src="/icons/id-card.png" alt="ID Card" className="rotating-icon" />
              <img src="/icons/folder.png" alt="Folder" className="rotating-icon" />
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
