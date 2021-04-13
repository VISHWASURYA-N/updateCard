import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import editReducer from './reducer/editReducer';
const mystore=createStore(editReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
  <Provider store={mystore}> <App/> </Provider> 
,
  document.getElementById('root')
);

