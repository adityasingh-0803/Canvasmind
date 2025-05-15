import React, { useState } from "react";

export default function HabitTracker() {
  const [habits, setHabits] = useState([]);
  const [habit, setHabit] = useState("");

  const addHabit = () => {
    if (habit.trim()) {
      setHabits([...habits, { text: habit, completed: false }]);
      setHabit("");
    }
  };

  const toggleHabit = (index) => {
    const newHabits = [...habits];
    newHabits[index].completed = !newHabits[index].completed;
    setHabits(newHabits);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">📊 Habit Tracker</h2>
      <div className="flex mb-2">
        <input
          className="border p-2 flex-grow rounded-l"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          placeholder="New habit"
        />
        <button className="bg-purple-500 text-white px-4 rounded-r" onClick={addHabit}>
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {habits.map((h, i) => (
          <li
            key={i}
            onClick={() => toggleHabit(i)}
            className={`cursor-pointer ${h.completed ? "line-through text-gray-400" : "text-black"}`}
          >
            {h.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
