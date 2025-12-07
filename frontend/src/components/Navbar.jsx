import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "#222", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
      <Link to="/login" style={{ color: "white" }}>Login</Link>
    </nav>
  );
}

export default Navbar;
