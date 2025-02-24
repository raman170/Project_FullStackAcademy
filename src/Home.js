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

const Home = () => {
  return (
    <div className="home-container">
      {/* Navbar Section */}
      <header className="navbar">
  {/* Left Side - Logo and Navigation */}
  <div className="nav-left">
    <div className="logo">
      <ul>
        <li> <Link to="/Home" className="logo-link">FullStackAcademy</Link> {/* Ensure correct path */}</li>
        <li><a href="#">Tutorials</a></li>
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
        <h1>Coding Languages</h1>
        <p className="tagline">"Code. Create. Conquer."</p>
        <div className="buttons">
          <button className="btn register" ><a href="/signup">REGISTER</a></button>
          <button className="btn learn-more"><a href="/LearnMore">LEARN MORE</a></button>
        </div>
        <p className="description">
          "Your go-to platform for learning, building, and mastering programming
          skills with resources, tutorials, and real-world projects."
        </p>
      </section>

      {/* Coding Languages Section */}
      <section className="coding-languages">
        <h2>Coding Languages</h2>
        <p className="subtitle">
          "Learn coding step-by-step, from basics to advanced, with practical projects and skills to solve real-world challenges."
        </p>

        <div className="language-grid">
  {[
    "C", "C++", "HTML", "Python", "Java", "CSS",
    "JavaScript", "PHP", "C#", "Bootstrap", "jQuery",
    "Django", "MySQL", "React", "Node.js"
  ].map((lang, index) => (
    <div className="language-card" key={index}>
      <div className="language-number">{index + 1}</div>
      <h3>{lang}</h3>
      <p>Describe a session topic from your workshop. This text supports the general description above by providing more details.</p>
      {/* Linking the "C" language card to the c.js page */}
      {lang === "C" ? (
        <Link to="/c" className="btn view-details">View Details</Link>
      ) : (
        <p>More Info</p>
      )}
    </div>
  ))}
</div>

      </section>

      {/* Sign-up Section */}
      <section className="sign-up-section">
        <h2>Sign up Here</h2>
        <div className="sign-up-form">
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="btn sign-up-btn"><a href="/home">Sign Up</a></button>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="youtube-section">
        <h2>Youtube Channel</h2>
        <div className="youtube-thumbnail">
          <p>Thumbnail</p>
        </div>
        <p className="youtube-description">
          "Join our coding tutorials on YouTube, where we explain coding concepts step by step. Subscribe for the latest programming tutorials and updates."
        </p>
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

export default Home;
