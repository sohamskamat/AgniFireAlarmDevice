import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <div className="logo-nav">
        <img src={logo} alt="Agni Fire Alarm Device Logo" className="logo" />
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </button>
        <nav>
          <ul className={menuOpen ? 'open' : ''} onClick={() => setMenuOpen(false)}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#news">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 