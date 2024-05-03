import React from 'react';
import { createRoot } from 'react-dom/client';
import Population from '../pages/population';

const populationContainer = document.getElementById('population-root');
if (populationContainer) {
  const populationRoot = createRoot(populationContainer);
  populationRoot.render(<Population />);
}