import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import "./Login.css";
import "./Home"
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Create an Account</h2>
        <h3 className="login-subtitle">Sign Up</h3>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignup} className="login-form">
          <table>
            <tbody>
              <tr>
                <td><label>Email:</label></td>
                <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
              </tr>
              <tr>
                <td><label>Password:</label></td>
                <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required /></td>
              </tr>
              <tr>
                <td colSpan="2" className="center">
                  <button type="submit" className="login-button" ><a href="/home">Sign Up</a></button>
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="center">
                  <Link to="/login" className="signup-button">Already have an account? Login</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default Signup;
