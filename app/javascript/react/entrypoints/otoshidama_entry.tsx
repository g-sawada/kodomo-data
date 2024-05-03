import React from 'react';
import { createRoot } from 'react-dom/client';
import Otoshidama from '../pages/otoshidama';

const otoshidamaContainer = document.getElementById('otoshidama-root');
if (otoshidamaContainer) {
  const otoshidamaRoot = createRoot(otoshidamaContainer);
  otoshidamaRoot.render(<Otoshidama />);
}