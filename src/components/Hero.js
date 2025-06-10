import React from 'react';
import './Hero.css';
import logo from '../assets/logo.png';

const Hero = () => (
  <section className="hero" id="home">
    <div className="hero-content">
      <img src={logo} alt="Agni Fire Alarm Device Logo" className="hero-logo" />
      <h1>Protecting Property & Saving Lives</h1>
      <p className="hero-tagline">Advanced Fire Detection & Alarm Solutions</p>
      <a href="#contact" className="cta-btn">Get in Touch</a>
    </div>
  </section>
);

export default Hero; 