import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>© {new Date().getFullYear()} Agni Fire Alarm Device. All rights reserved.</p>
    <div className="footer-socials">
      {/* Add social icons/links here if needed */}
    </div>
  </footer>
);

export default Footer; 