import React, { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const saveNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote("");
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">🗒️ Notes</h2>
      <textarea
        className="w-full border p-2 rounded"
        rows="3"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your note here..."
      />
      <button onClick={saveNote} className="mt-2 bg-green-500 text-white px-4 py-1 rounded">
        Save
      </button>
      <ul className="mt-3 list-disc pl-5">
        {notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    </div>
  );
}
