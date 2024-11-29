import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App'; // Asigură-te că calea este corectă
import './index.css'; // Dacă ai un fișier CSS global

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
