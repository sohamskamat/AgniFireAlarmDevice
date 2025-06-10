import React from 'react';
import './Testimonials.css';

const testimonials = [
  { name: 'Avinash Singh', feedback: 'Best fire safety solutions—trustworthy, efficient, and easy to use!' },
  { name: 'Pallavi Singh', feedback: 'Top-quality fire alarm system! Peace of mind for our business.' },
  { name: 'Ajay Sinha', feedback: 'Exceptional service! Reliable fire detection ensures our safety every day.' },
];

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <h2>Testimonials</h2>
    <div className="testimonial-cards">
      {testimonials.map((t, i) => (
        <div className="testimonial-card" key={i}>
          <p className="testimonial-feedback">“{t.feedback}”</p>
          <p className="testimonial-name">- {t.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 