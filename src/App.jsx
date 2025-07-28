import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ProgressForm from "./components/ProgressForm";
import ProgressList from "./components/ProgressList";

function App() {
  const [progressData, setProgressData] = useState(() => {
    // Load saved data from localStorage on first render
    const saved = localStorage.getItem("progressData");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem("progressData", JSON.stringify(progressData));
  }, [progressData]);

  function handleAddProgress(newItem) {
    setProgressData((prev) => [newItem, ...prev]);
  }

  function handleDeleteProgress(id) {
    setProgressData((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <div>
      <h1>Progress Tracker</h1>
      <ProgressForm onAdd={handleAddProgress} />
      <ProgressList items={progressData} onDelete={handleDeleteProgress} />
    </div>
  );
}

export default App;