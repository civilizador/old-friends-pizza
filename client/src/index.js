import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route }  from 'react-router-dom';
import Nav from './components/main_comps/Nav';
import HomePage from './components/main_comps/HomePage';
import Menu from './components/main_comps/Menu';
import Login from './components/user_comps/Login';
import Register from './components/user_comps/Register';
import About from './components/main_comps/About';
import Create from './components/crud_comps/Create';
import Edit from './components/crud_comps/Edit';
import Show from './components/crud_comps/Show';
import './index.css';
 
ReactDOM.render(
  <div>
      <BrowserRouter>
      <Nav />
        <Route path='/' exact component={HomePage} />
        <Route path='/menu' exact component={Menu} />
        <Route path='/about' exact component={About} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/profile' exact component={HomePage} />
        <Route path='/create' exact component={Create} />
        <Route path='/edit' exact component={Edit} />
        <Route path='/show' exact component={Show} /> 
      </BrowserRouter>
  </div>
,
  document.getElementById('root'));
