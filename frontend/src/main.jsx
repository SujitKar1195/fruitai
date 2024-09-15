// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import store from './store/store.js'; // Path to your Redux store
import App from './App'; // Path to your main App component
import './index.css'; // Global CSS file (optional)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
