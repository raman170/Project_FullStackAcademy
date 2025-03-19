import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./signup";
import "./login";
import "./Home.css";
import "./LearnMore";
import "./Home";
import "./c";
import "./Tutorial";

const Tutorial = () => {
  return (
    <div className="home-container">
      {/* Navbar Section */}
      <header className="navbar">
  {/* Left Side - Logo and Navigation */}
  <div className="nav-left">
    <div className="logo">
      <ul>
        <li> <Link to="/Home" className="logo-link">FullStackAcademy</Link> {/* Ensure correct path */}</li>
        <li><a href="/Tutorial">Tutorials</a></li>
        <li><a href="#">Exercises</a></li>
        <li><a href="./LearnMore">Services</a></li>
      </ul>
   </div>
  </div>

  {/* Right Side - Search and Buttons */}
  <div className="auth-buttons">
    <input type="text" placeholder="Search" className="search-bar" aria-label="Search" />
    <button className="btn login"><a href="/login">Login </a></button>
    <button className="btn sign-up"><a href="/signup">Sign Up </a></button>
  </div>
</header>


      {/* Hero Section */}
      <section className="hero">
        <h1>Tutorial</h1>    
      </section>

      {/* tutorial Section */}
      <section className="tutorials">
        

      </section>

      

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Contact Us</a>
          <a href="#">About Us</a>
        </div>
        <p>© 2025 FullStackAcademy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Tutorial;
