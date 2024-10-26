// src/components/Dashboard.js
import React, { useState } from "react";
import "../css/Dashboard.css";

function Dashboard() {
  const [mood, setMood] = useState("");
  const [journalEntry, setJournalEntry] = useState("");
  const [activity, setActivity] = useState("");
  const [progress, setProgress] = useState([3, 4, 5, 4, 6]); // Contoh data progress mood

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleJournalChange = (event) => {
    setJournalEntry(event.target.value);
  };

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
  };

  const handleSubmit = () => {
    alert("Dashboard updated!");
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Personalized Mental Health Dashboard</h2>

      {/* Mood Tracker Section */}
      <div className="mood-tracker">
        <h3>How are you feeling today?</h3>
        <select value={mood} onChange={handleMoodChange} className="mood-select">
          <option value="">Select your mood</option>
          <option value="happy">😊 Happy</option>
          <option value="neutral">😐 Neutral</option>
          <option value="sad">😔 Sad</option>
          <option value="stressed">😖 Stressed</option>
          <option value="anxious">😟 Anxious</option>
        </select>
      </div>

      {/* Journal Entry Section */}
      <div className="journal-entry">
        <h3>Daily Journal Entry</h3>
        <textarea
          value={journalEntry}
          onChange={handleJournalChange}
          placeholder="Write about your day..."
        />
      </div>

      {/* Activity Reminder Section */}
      <div className="activity-reminder">
        <h3>Activity Reminder</h3>
        <input
          type="text"
          value={activity}
          onChange={handleActivityChange}
          placeholder="E.g., Meditate for 5 minutes"
        />
      </div>

      {/* Progress Chart Section (Sederhana) */}
      <div className="progress-chart">
        <h3>Progress Chart</h3>
        <div className="chart-container">
          {progress.map((level, index) => (
            <div
              key={index}
              className="chart-bar"
              style={{ height: `${level * 10}px` }}
              title={`Day ${index + 1}: ${level}`}
            ></div>
          ))}
        </div>
      </div>

      <button onClick={handleSubmit} className="update-button">
        Update Dashboard
      </button>
    </div>
  );
}

export default Dashboard;
