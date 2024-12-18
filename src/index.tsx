import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Check if the element exists
if (rootElement) {
  // Create a root using the new createRoot API
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
