import React from 'react';
import ReactDOM from 'react-dom/client';
import './css-s/Home.css';
import { BrowserRouter } from 'react-router-dom';
import App from './reactss/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/react-cards'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);