import React, { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">📝 To-Do List</h2>
      <div className="flex mb-2">
        <input
          className="border p-2 flex-grow rounded-l"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new task"
        />
        <button className="bg-blue-500 text-white px-4 rounded-r" onClick={addTask}>
          Add
        </button>
      </div>
      <ul className="list-disc pl-5">
        {tasks.map((task, i) => (
          <li key={i} className="mb-1 flex justify-between">
            {task}
            <button onClick={() => removeTask(i)} className="text-red-500">
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
