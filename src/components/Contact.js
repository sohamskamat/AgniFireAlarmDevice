import React from 'react';
import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact Us</h2>
    <div className="contact-content">
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p><strong>Address:</strong> ASES HOUSE, A-2 / 69 Site-IV, Sahibabad Indl. Area, Ghaziabad, U.P -201010</p>
        <p><strong>Email:</strong> info@agnifirealarm.com</p>
        <p><strong>Phone:</strong> +91-73038 84103</p>
      </div>
    </div>
  </section>
);

export default Contact; 