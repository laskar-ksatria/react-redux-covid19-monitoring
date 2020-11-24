import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';
//inital createStore
import { createStore } from 'redux';
//Initial provider
import { Provider } from 'react-redux';
//RootReducer
import rootReducer from './stores';
//import react-router-dom
import { BrowserRouter as Router } from 'react-router-dom';

const stores = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={stores}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


