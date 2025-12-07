import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) navigate("/login");
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await API.get("/projects");
      setProjects(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const addProject = async (e) => {
    e.preventDefault();
    try {
      await API.post("/projects", { title, description, techStack, githubLink });
      setTitle(""); setDescription(""); setTechStack(""); setGithubLink("");
      fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteProject = async (id) => {
    try {
      await API.delete(`/projects/${id}`);
      fetchProjects();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center" }}>Dashboard</h2>
      <form onSubmit={addProject} style={{ maxWidth: "400px", margin: "auto" }}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required style={{ width: "100%", marginBottom: "5px" }}/>
        <input placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} required style={{ width: "100%", marginBottom: "5px" }}/>
        <input placeholder="Tech Stack" value={techStack} onChange={e => setTechStack(e.target.value)} required style={{ width: "100%", marginBottom: "5px" }}/>
        <input placeholder="GitHub Link" value={githubLink} onChange={e => setGithubLink(e.target.value)} required style={{ width: "100%", marginBottom: "5px" }}/>
        <button type="submit" style={{ width: "100%" }}>Add Project</button>
      </form>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "20px" }}>
        {projects.map(p => (
          <div key={p.id}>
            <ProjectCard project={p} />
            <button onClick={() => deleteProject(p.id)} style={{ marginBottom: "10px" }}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
