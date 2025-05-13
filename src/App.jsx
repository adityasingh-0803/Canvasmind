import React from 'react';
import StickyNote from './components/StickyNote';
import TodoList from './components/TodoList';
import Bookmarks from './components/Bookmarks';

function App() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-6">🧠 CanvasMind</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <StickyNote />
        <TodoList />
        <Bookmarks />
      </div>
    </div>
  );
}

export default App;
