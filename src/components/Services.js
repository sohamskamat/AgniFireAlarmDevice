import React from 'react';
import { FaFireExtinguisher, FaTools, FaClipboardCheck } from 'react-icons/fa';
import './Services.css';

const services = [
  { icon: <FaFireExtinguisher />, title: 'Fire Detection & Alarm Systems', desc: 'Real-time alerts and advanced fire detection technology.' },
  { icon: <FaTools />, title: 'Installation & Maintenance', desc: 'Professional setup and ongoing support for your safety systems.' },
  { icon: <FaClipboardCheck />, title: 'Fire Risk Assessment', desc: 'Comprehensive evaluation to ensure compliance and safety.' },
];

const Services = () => (
  <section className="services" id="services">
    <h2>Our Services</h2>
    <div className="service-cards">
      {services.map((s, i) => (
        <div className="service-card" key={i}>
          <div className="service-icon">{s.icon}</div>
          <h3>{s.title}</h3>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services; 