import React, { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password });
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        setMessage(res.data.message);
        navigate("/dashboard");
      } else {
        setMessage(res.data.message);
      }
    } catch (err) {
      console.log(err);
      setMessage("Login failed");
    }
  };

  return (
    <div>
      <Navbar />
      <h2 style={{ textAlign: "center" }}>Login</h2>
      <form onSubmit={handleLogin} style={{ maxWidth: "400px", margin: "auto" }}>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: "100%", marginBottom: "10px" }}/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: "100%", marginBottom: "10px" }}/>
        <button type="submit" style={{ width: "100%" }}>Login</button>
      </form>
      <p style={{ textAlign: "center", color: "red" }}>{message}</p>
    </div>
  );
}

export default Login;
