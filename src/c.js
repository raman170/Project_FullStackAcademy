import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Home"

const CTutorial = () => {
  return (
    <div className="c-container">
      {/* Navbar Section */}
      <header className="navbar">
        {/* Left Side - Logo and Navigation */}
        <div className="nav-left">
          <div className="logo">
            <ul>
              <li>
                <Link to="/Home" className="logo-link">
                  FullStackAcademy
                </Link>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">Exercises</a>
              </li>
              <li>
                <a href="#">Resources</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Search and Buttons */}
        <div className="auth-buttons">
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            aria-label="Search"
          />
          <button className="btn login">Login</button>
          <button className="btn sign-up">Sign Up</button>
        </div>
      </header>

      {/* Sidebar Navigation */}
      <aside className="c-sidebar">
        <h2>C Tutorial</h2>
        <ul>
          <li className="active">
            <Link to="#">C HOME</Link>
          </li>
          <li>
            <Link to="#">C Intro</Link>
          </li>
          <li>
            <Link to="#">C Get Started</Link>
          </li>
          <li>
            <Link to="#">C Syntax</Link>
          </li>
          <li>
            <Link to="#">C Output</Link>
          </li>
          <li>
            <Link to="#">C Variables</Link>
          </li>
          <li>
            <Link to="#">C Data Types</Link>
          </li>
          <li>
            <Link to="#">C Operators</Link>
          </li>
          <li>
            <Link to="#">C If...Else</Link>
          </li>
          <li>
            <Link to="#">C Loops</Link>
          </li>
          <li>
            <Link to="#">C Functions</Link>
          </li>
          <li>
            <Link to="#">C Arrays</Link>
          </li>
          <li>
            <Link to="#">C Pointers</Link>
          </li>
          <li>
            <Link to="#">C Memory Management</Link>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="c-main">
        <header className="c-header">
          <h1>C Tutorial</h1>
          <div className="nav-buttons">
            <button className="btn">Home</button>
            <button className="btn next-btn">Next ➤</button>
          </div>
        </header>

        <section className="c-intro">
          <h2>Learn C</h2>
          <p>
            C is a general-purpose programming language that has been widely
            used for over 50 years.
          </p>
          <p>
            C is very powerful; it has been used to develop operating systems,
            databases, applications, etc.
          </p>
          <button className="btn start-btn">Start Learning C Now »</button>
        </section>
      </main>

      {/* YouTube Section */}
      <section className="youtube-section">
        <h2>Youtube Channel</h2>
        <div className="youtube-thumbnail">
          <p>Thumbnail</p>
        </div>
        <p className="youtube-description">
          "Join our coding tutorials on YouTube, where we explain coding
          concepts step by step. Subscribe for the latest programming tutorials
          and updates."
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

export default CTutorial;
