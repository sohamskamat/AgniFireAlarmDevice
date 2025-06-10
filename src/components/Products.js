import React from 'react';
import './Products.css';

const products = [
  { name: 'Fire Alarm Panel', desc: 'Centralized control for all fire detection devices.' },
  { name: 'Smoke Detector', desc: 'Sensitive and reliable smoke detection for early warning.' },
  { name: 'Response Indicator', desc: 'Visual indicator for quick response to fire events.' },
  { name: 'Control Module', desc: 'Seamless integration with building management systems.' },
];

const Products = () => (
  <section className="products" id="products">
    <h2>Our Products</h2>
    <div className="product-cards">
      {products.map((p, i) => (
        <div className="product-card" key={i}>
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Products; 