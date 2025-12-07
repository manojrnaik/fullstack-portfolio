import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import API from "../api/axios";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>My Portfolio Projects</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Home;
