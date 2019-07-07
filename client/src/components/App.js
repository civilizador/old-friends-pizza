import React from 'react';
import { BrowserRouter, Route }  from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentUser} from '../actions';
import Nav from './main_comps/Nav';
import HomePage from './main_comps/HomePage';
import CartPage from './main_comps/CartPage'
import About from './main_comps/About';
import Profile from './user_comps/Profile';
import Login from './user_comps/Login';
import Register from './user_comps/Register';
import Create from './crud_comps/Create';
import Edit from './crud_comps/Edit';
import Show from './crud_comps/Show';
import OrderConf from './main_comps/OrderConf';


class App extends React.Component {

renderEditRoutes(){
  if(this.props.store.auth && this.props.store.auth.admin){
    return(
      <BrowserRouter>
        <Nav />
          <Route path='/' exact component={HomePage} />
          <Route path='/about' exact component={About} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/login' exact component={Login} />
          <Route path='/create'exact component={Create} />
          <Route path='/edit/:id'   exact component={Edit} />
          <Route path='/show' exact component={Show} />
          <Route path='/cart' exact component={CartPage} />
          <Route path='/cart/orderConf' exact component={OrderConf} />
        </BrowserRouter>
          )
  }else if(this.props.store.auth){
    return(
      <BrowserRouter>
        <Nav />
           <Route path='/' exact component={HomePage} />
           <Route path='/about' exact component={About} />
           <Route path='/login' exact component={Login} />
           <Route path='/show' exact component={Show} />
           <Route path='/cart' exact component={CartPage} />
           <Route path='/profile' exact component={Profile} />
        </BrowserRouter>
          )
  }else{
      return(
      <BrowserRouter>
        <Nav />
           <Route path='/' exact component={HomePage} />
           <Route path='/about' exact component={About} />
           <Route path='/login' exact component={Login} />
           <Route path='/register' exact component={Register} />
           <Route path='/show' exact component={Show} />
         </BrowserRouter>
          )
  }
}



  componentDidMount(){
       this.props.getCurrentUser()

  }

  render() {
     return (
      <div className="App">
        {this.renderEditRoutes()}
       </div>
    );
  }

}
// Since we will be accessing to the user state inside of NAV component we not going to pass our state object here instead we will pass
// Action to get current user .
const mapStateToProps=(store)=>({store})
export default connect(mapStateToProps,{getCurrentUser})(App);
