import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Bookmarks = () => {
  const [links, setLinks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(links));
  }, [links]);

  const addBookmark = () => {
    setLinks([...links, { id: uuidv4(), title: '', url: '' }]);
  };

  const updateBookmark = (id, key, value) => {
    setLinks(links.map(link =>
      link.id === id ? { ...link, [key]: value } : link
    ));
  };

  const removeBookmark = (id) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold">🔖 Bookmarks</h2>
        <button onClick={addBookmark} className="text-sm bg-green-200 px-2 py-1 rounded">Add</button>
      </div>
      <ul>
        {links.map(link => (
          <li key={link.id} className="mb-2">
            <input
              type="text"
              placeholder="Title"
              value={link.title}
              onChange={(e) => updateBookmark(link.id, 'title', e.target.value)}
              className="mr-2"
            />
            <input
              type="url"
              placeholder="URL"
              value={link.url}
              onChange={(e) => updateBookmark(link.id, 'url', e.target.value)}
              className="mr-2"
            />
            <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600">Go</a>
            <button onClick={() => removeBookmark(link
