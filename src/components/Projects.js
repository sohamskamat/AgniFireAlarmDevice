import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Project One',
    image: 'https://via.placeholder.com/300x200?text=Project+1',
    description: 'Fire Safety System Installation'
  },
  {
    name: 'Project Two',
    image: 'https://via.placeholder.com/300x200?text=Project+2',
    description: 'Industrial Fire Protection'
  },
  {
    name: 'Project Three',
    image: 'https://via.placeholder.com/300x200?text=Project+3',
    description: 'Commercial Building Safety'
  },
  {
    name: 'Project Four',
    image: 'https://via.placeholder.com/300x200?text=Project+4',
    description: 'Residential Complex Security'
  }
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Our Projects</h2>
    <div className="project-grid">
      {projects.map((project, i) => (
        <div className="project-card" key={i}>
          <div className="project-image">
            <img src={project.image} alt={project.name} />
          </div>
          <div className="project-info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 