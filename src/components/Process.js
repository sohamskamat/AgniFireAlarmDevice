import React from 'react';
import './Process.css';

const steps = [
  {
    title: 'Consultation & Assessment',
    desc: 'We understand your needs and assess fire safety risks to recommend the best solutions.'
  },
  {
    title: 'Customized Planning & Design',
    desc: 'Tailored fire detection systems designed for your property using the latest technology.'
  },
  {
    title: 'Testing & Quality Assurance',
    desc: 'Rigorous testing and training to ensure reliability and compliance with safety standards.'
  }
];

const Process = () => (
  <section className="process" id="process">
    <h2>How We Work</h2>
    <div className="process-steps">
      {steps.map((step, i) => (
        <div className="process-step" key={i}>
          <div className="step-number">{i + 1}</div>
          <h3>{step.title}</h3>
          <p>{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Process; 