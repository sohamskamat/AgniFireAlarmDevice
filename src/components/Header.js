import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { FaBars, FaEnvelope, FaPhone } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">
          <img src={logo} alt="Agni Fire Alarm Device Logo" />
        </div>
        <div style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
          <div className="email">
            <FaEnvelope /> <span>info@agnifirealarm.com</span>
          </div>
          <div className="phone">
            <FaPhone /> <span>+91 1234567890</span>
          </div>
        </div>
      </div>
      <nav className="main-nav">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
        <ul className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#clients">Our Clients</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 