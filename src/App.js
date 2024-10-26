// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Mental Health App</h1>
      <Dashboard />
    </div>
  );
}

export default App;
