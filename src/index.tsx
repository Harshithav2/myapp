import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './components/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
