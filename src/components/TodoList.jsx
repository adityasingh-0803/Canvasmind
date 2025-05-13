import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('todo-tasks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    setTasks([...tasks, { id: uuidv4(), text: '', done: false }]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const updateText = (id, text) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text } : task
    ));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">✅ To-Do List</h2>
        <button onClick={addTask} className="text-sm bg-blue-200 px-2 py-1 rounded">Add</button>
      </div>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => toggleTask(task.id)}
              className="mr-2"
            />
            <input
              type="text"
              value={task.text}
              onChange={(e) => updateText(task.id, e.target.value)}
              className="flex-1 bg-transparent outline-none"
            />
            <button onClick={() => removeTask(task.id)} className="ml-2 text-red-500">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
