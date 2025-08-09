import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* Brand logo + name */}
      <Link to="/" className="brand">
        <img
          src="/images/logo.png"   // Make sure this file exists in public/images
          alt="SafeNest"
          className="brand__logo"
        />
        <span className="brand__name">SafeNest</span>
      </Link>

      {/* Navigation links */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li>
            <Link to="/signup" className="btn">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
