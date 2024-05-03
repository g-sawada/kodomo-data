import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div className="text-2xl m-10">
      <h1>My React App</h1>
      <p>It works!</p>
    </div>
  );
}

const container = document.getElementById('my_react_app');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}