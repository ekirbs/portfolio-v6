import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from "./serviceWorker";
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
serviceWorker.unregister();
