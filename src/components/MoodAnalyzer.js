import React, { useState } from "react";

function MoodAnalyzer() {
  const [journalEntry, setJournalEntry] = useState("");

  const analyzeMood = () => {
    // Logika sederhana untuk analisis mood
    alert("Mood analysis coming soon!");
  };

  return (
    <div>
      <h2>AI-Powered Mood Analyzer</h2>
      <textarea
        placeholder="Write your journal entry..."
        value={journalEntry}
        onChange={(e) => setJournalEntry(e.target.value)}
      />
      <button onClick={analyzeMood}>Analyze Mood</button>
    </div>
  );
}

export default MoodAnalyzer;
