import React from 'react';
import './News.css';

const News = () => {
  return (
    <section id="news" className="news-section">
      <div className="container">
        <h2>Latest News</h2>
        <div className="news-grid">
          <div className="news-card">
            <div className="news-image">
              <img src="/images/news1.jpg" alt="News 1" />
            </div>
            <div className="news-content">
              <h3>New Fire Safety Regulations</h3>
              <p>Stay updated with the latest fire safety regulations and how they affect your business.</p>
              <button type="button" className="read-more">Read More</button>
            </div>
          </div>
          <div className="news-card">
            <div className="news-image">
              <img src="/images/news2.jpg" alt="News 2" />
            </div>
            <div className="news-content">
              <h3>Smart Fire Detection Technology</h3>
              <p>Discover how AI-powered fire detection systems are revolutionizing safety measures.</p>
              <button type="button" className="read-more">Read More</button>
            </div>
          </div>
          <div className="news-card">
            <div className="news-image">
              <img src="/images/news3.jpg" alt="News 3" />
            </div>
            <div className="news-content">
              <h3>Industry Safety Awards</h3>
              <p>Agni Fire Alarm Device recognized for excellence in fire safety innovation.</p>
              <button type="button" className="read-more">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News; 