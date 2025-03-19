// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import ForgotPassword from "./forgotpass";
import Home from "./Home";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import LearnMore from "./LearnMore";
import CTutorial from "./c";
import Tutorial from "./Tutorial";
import Contact from "./Contact";

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} /> {/* Route should match */}
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/c" element={<CTutorial />} />
        <Route path="/Tutorial" element={<Tutorial />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;