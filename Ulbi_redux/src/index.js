import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
import App from './App';
// import countReducer from './store/countReducer';
// import thunk from 'redux-thunk'
import {store} from './store'



ReactDOM.render(  
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);