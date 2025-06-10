import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Products />
      <Services />
      <Process />
      <Testimonials />
      <Clients />
      <News />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
