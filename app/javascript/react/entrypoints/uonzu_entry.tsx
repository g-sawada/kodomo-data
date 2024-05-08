import React from 'react';
import { createRoot } from 'react-dom/client';
import Uonzu from '../pages/uonzu';

const uonzuContainer = document.getElementById('uonzu-root');
if (uonzuContainer) {
  const uonzuRoot = createRoot(uonzuContainer);
  uonzuRoot.render(<Uonzu />);
} else {
  console.log('Could not find uonzu')
}