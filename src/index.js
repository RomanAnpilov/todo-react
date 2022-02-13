import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './main.scss'
import store from './Redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </ Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


