import { useState } from "react";

function ProgressForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Workout");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    // Send data to parent (App.jsx)
    onAdd({
      title,
      category,
      date,
      notes,
    });

    // Reset the form
    setTitle("");
    setCategory("Workout");
    setDate("");
    setNotes("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Workout">Workout</option>
        <option value="Diet">Diet</option>
        <option value="Learning">Learning</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        placeholder="Notes..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      <button type="submit">Add Progress</button>
    </form>
  );
}

export default ProgressForm;
