import React from "react";
import TodoList from "./components/TodoList";
import Notes from "./components/Notes";
import Timer from "./components/Timer";
import HabitTracker from "./components/HabitTracker";

export default function App() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">🧠 CanvasMind Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TodoList />
        <Notes />
        <Timer />
        <HabitTracker />
      </div>
    </div>
  );
}
