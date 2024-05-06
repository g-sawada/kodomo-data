import React from 'react';
import { createRoot } from 'react-dom/client';
import Subject from '../pages/subject';

const subjectContainer = document.getElementById('subject-root');
if (subjectContainer) {
  const subjectRoot = createRoot(subjectContainer);
  subjectRoot.render(<Subject />);
} else {
  console.log('Could not find subject')
}