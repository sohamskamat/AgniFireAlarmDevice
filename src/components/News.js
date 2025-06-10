import React from 'react';
import './News.css';

const news = [
  { date: '02 Feb', title: 'Fire Alarm System Monitoring: Why You Need It', desc: 'Discover the importance of real-time fire alarm monitoring for safety and compliance.' },
  { date: '04 Feb', title: 'Intelligent Addressable Fire Alarm & PAVA System', desc: 'Learn about the latest advancements in addressable fire alarm and voice evacuation systems.' },
  { date: '06 Feb', title: 'Electrical Control Panels: Enhancing Safety', desc: 'How modern control panels improve efficiency and safety in industrial operations.' },
];

const News = () => (
  <section className="news" id="news">
    <h2>Latest News</h2>
    <div className="news-cards">
      {news.map((n, i) => (
        <div className="news-card" key={i}>
          <div className="news-date">{n.date}</div>
          <h3>{n.title}</h3>
          <p>{n.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default News; 