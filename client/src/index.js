import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
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
