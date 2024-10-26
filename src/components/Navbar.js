// src/components/Navbar.js
import React from "react";
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Mental Health App</div>
      <ul className="navbar-links">
        <li>
          <a href="#dashboard">Dashboard</a>
        </li>
        <li>
          <a href="#vr-mindfulness">VR Mindfulness</a>
        </li>
        <li>
          <a href="#mood-analyzer">Mood Analyzer</a>
        </li>
        <li>
          <a href="#support-circles">Support Circles</a>
        </li>
        <li>
          <a href="#challenges">Challenges</a>
        </li>
        <li>
          <a href="#peer-support-chat">Peer Support Chat</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
