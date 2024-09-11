import React from 'react';
import ReactDOM from 'react-dom/client';

import { store } from './store';
import { Provider } from 'react-redux';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);