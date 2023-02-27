import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store, persistor } from './Redux/store'
import { Provider } from 'react-redux'
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

