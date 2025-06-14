import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div className="info-text">
                <h3>Address : </h3>
                <p>123 Business Street</p>
                <p>City, State 12345</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div className="info-text">
                <h3>Email : </h3>
                <p>info@agnifirealarm.com</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhone className="icon" />
              <div className="info-text">
                <h3>Phone : </h3>
                <p>+91 1234567890</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 