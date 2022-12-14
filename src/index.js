import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store'
import { Provider } from 'react-redux'

import axios from 'axios'



// axios.defaults.baseURL = 'http://localhost:5000/api/v1'
axios.defaults.baseURL = 'https://super-fish-flannel-nightgown.cyclic.app/api/v1'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
