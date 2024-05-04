import React from 'react';
import { createRoot } from 'react-dom/client';
import FiftyMeter from '../pages/fifty_meter';

const fiftyMeterContainer = document.getElementById('fifty-meter-root');
if (fiftyMeterContainer) {
  const fiftyMeterRoot = createRoot(fiftyMeterContainer);
  fiftyMeterRoot.render(<FiftyMeter />);
} else {
  console.log('Could not find fifty-meter')
}