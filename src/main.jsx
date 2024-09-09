import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './chatbot.css';  // Make sure to use the correct path for your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
