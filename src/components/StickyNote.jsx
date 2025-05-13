import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { v4 as uuidv4 } from 'uuid';

const StickyNote = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('sticky-notes');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('sticky-notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    setNotes([...notes, { id: uuidv4(), text: 'New Note', x: 0, y: 0 }]);
  };

  const updateNote = (id, newText) => {
    setNotes(notes.map(note => note.id === id ? { ...note, text: newText } : note));
  };

  const onDrag = (e, data, id) => {
    setNotes(notes.map(note =>
      note.id === id ? { ...note, x: data.x, y: data.y } : note
    ));
  };

  return (
    <div className="bg-yellow-100 p-4 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">🗒️ Sticky Notes</h2>
        <button onClick={addNote} className="text-sm bg-yellow-300 px-2 py-1 rounded">Add</button>
      </div>
      <div>
        {notes.map(note => (
          <Draggable
            key={note.id}
            defaultPosition={{ x: note.x, y: note.y }}
            onStop={(e, data) => onDrag(e, data, note.id)}
          >
            <div className="w-48 bg-yellow-200 p-2 rounded shadow-md absolute">
              <textarea
                className="w-full bg-transparent resize-none outline-none"
                value={note.text}
                onChange={(e) => updateNote(note.id, e.target.value)}
              />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default StickyNote;
