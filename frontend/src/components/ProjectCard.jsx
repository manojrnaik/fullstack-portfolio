import React from "react";

function ProjectCard({ project }) {
  return (
    <div style={{
      padding: "15px",
      margin: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px"
    }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <small>Tech: {project.techStack}</small><br />
      <a href={project.githubLink} target="_blank">View GitHub</a>
    </div>
  );
}

export default ProjectCard;
