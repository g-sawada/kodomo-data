import React from 'react';
import { createRoot } from 'react-dom/client';
import Future from '../pages/future';

const futureContainer = document.getElementById('future-root');
if (futureContainer) {
  const futureRoot = createRoot(futureContainer);
  futureRoot.render(<Future />);
} else {
  console.log('Could not find future')
} 
