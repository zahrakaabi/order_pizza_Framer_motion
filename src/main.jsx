/* -------------------------------------------------------------- */
/*                           DEPENDENCIES                         */
/* -------------------------------------------------------------- */
// Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

// UI Local Components
import App from './App';

// Styles
import './index.css';

/* -------------------------------------------------------------- */
/*                         REACT DOM RENDERING                    */
/* -------------------------------------------------------------- */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)