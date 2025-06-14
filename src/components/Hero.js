import React, { useState } from 'react';
import './Hero.css';
import logo from '../assets/logo.png';

const Hero = () => {
  const [activeTab, setActiveTab] = useState('vision');

  const renderContent = () => {
    switch (activeTab) {
      case 'vision':
        return (
          <div className="tab-content">
            <h2>Vision</h2>
            <h3>Fine Safety and Engineering</h3>
            <p>We believe in quality and hence we are committed to high quality products for our clients with our group of highly skilled engineers and technicians.</p>
            
            <h3>Vision:</h3>
            <p>To save lives, protect property and keep organizations thriving.</p>
            <p>To be the most valued and trusted life safety.</p>
            
            <p>AFAD constantly expands the boundaries to the highest services in the fire protection industries with a commitment to customer satisfaction. Our team of talented professionals and skilled workers will facilitate the success of any project that we undertake, with good practice, quality and safety.</p>
          </div>
        );
      case 'mission':
        return (
          <div className="tab-content">
            <h2>Mission</h2>
            <p>We undertake the design, acquisition and supply of equipment. Agni Fire Alarm Devices (AFAD) is committed to safety providing high quality and valuable fire protection services for our customers.</p>
          </div>
        );
      case 'values':
        return (
          <div className="tab-content">
            <h2>Values</h2>
            <p>Our core values will be added here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <img src={logo} alt="Agni Fire Alarm Device Logo" className="hero-logo" />
        <div className="tabs">
          <button 
            className={activeTab === 'vision' ? 'active' : ''} 
            onClick={() => setActiveTab('vision')}
          >
            Vision
          </button>
          <button 
            className={activeTab === 'mission' ? 'active' : ''} 
            onClick={() => setActiveTab('mission')}
          >
            Mission
          </button>
          <button 
            className={activeTab === 'values' ? 'active' : ''} 
            onClick={() => setActiveTab('values')}
          >
            Values
          </button>
        </div>
        {renderContent()}
      </div>
    </section>
  );
};

export default Hero; 