import React, { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let interval;
    if (active) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [active]);

  const reset = () => {
    setSeconds(0);
    setActive(false);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-3">⏱️ Timer</h2>
      <div className="text-2xl mb-2">{seconds}s</div>
      <div>
        <button onClick={() => setActive(!active)} className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
          {active ? "Pause" : "Start"}
        </button>
        <button onClick={reset} className="bg-red-500 text-white px-3 py-1 rounded">
          Reset
        </button>
      </div>
    </div>
  );
}
