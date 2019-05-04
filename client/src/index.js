import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, connect} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import { BrowserRouter, Route }  from 'react-router-dom';
import thunk from 'redux-thunk';
import reducers from './reducers';
import App from './components/App';
import './index.css';
const store = createStore( reducers, applyMiddleware(thunk) );

ReactDOM.render(
  <div>
  <Provider store={store}>
    <App />
  </Provider>
  </div>
,
  document.getElementById('root'));
