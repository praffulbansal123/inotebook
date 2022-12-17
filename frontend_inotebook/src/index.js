import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

/*
*/
import "../node_modules/react-bootstrap/dist/react-bootstrap.js"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import AlertState from './context/alerts/AlertState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AlertState>
      <App />
    </AlertState>
  </React.StrictMode>
);