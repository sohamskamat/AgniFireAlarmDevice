import React from 'react';
import './Clients.css';

const clients = [
  { name: 'Client One', logo: 'https://via.placeholder.com/80x40?text=Client+1' },
  { name: 'Client Two', logo: 'https://via.placeholder.com/80x40?text=Client+2' },
  { name: 'Client Three', logo: 'https://via.placeholder.com/80x40?text=Client+3' },
  { name: 'Client Four', logo: 'https://via.placeholder.com/80x40?text=Client+4' },
];

const Clients = () => (
  <section className="clients" id="clients">
    <h2>Our Clients</h2>
    <div className="client-logos">
      {clients.map((c, i) => (
        <div className="client-logo-card" key={i}>
          <img src={c.logo} alt={c.name} />
          <p>{c.name}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Clients; 