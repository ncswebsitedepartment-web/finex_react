import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-page-wrapper">
      <section className="projects-under-construction">
        <div className="projects-construction-card">
          <div className="projects-construction-icon">
            🚧
          </div>

          <h1>Projects Gallery Under Construction</h1>

          <p>
            We are currently updating our project
            portfolio with new images, case studies,
            and completed works.
          </p>

          <div className="projects-coming-soon">
            Coming Soon
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;