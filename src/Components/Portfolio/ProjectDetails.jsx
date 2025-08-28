import React from "react";
import { useParams, Link } from "react-router-dom";
import { WebsitesDetails } from "./constants";
import "./Portfolio.css"; // 👈 import the CSS file

const ProjectDetails = () => {
  const { id } = useParams();
  const project = WebsitesDetails.find((p) => p.id === parseInt(id));

  if (!project) return <h2>Project not found</h2>;

  return (
    <div className="container-details">
      <Link to="/#Portfolio">← Back to Portfolio</Link>
      <h1>{project.webname}</h1>
      <img src={project.webimage} alt={project.webname} />

      <h2>Project Overview</h2>
      <p>{project.overview}</p>

      <h2>Problem Statement</h2>
      <p>{project.problem}</p>

      <h2>Proposed Solution</h2>
      <p>{project.solution}</p>

      <h2>My Role</h2>
      <p>{project.role}</p>

      <h2>Technologies and Tools</h2>
      <p>{project.technologies}</p>

      <h2>Impact and Achievements</h2>
      <p>{project.impact}</p>

      <h2>Team Collaboration</h2>
      <p>{project.collaboration}</p>

      <h2>Learning and Development</h2>
      <p>{project.learning}</p>

      {project.link ? (
        <a href={project.weblink} target="_blank" rel="noopener noreferrer">
          Visit Live Project
        </a>
      ) : (
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          View on Github
        </a>
      )}
    </div>
  );
};

export default ProjectDetails;
