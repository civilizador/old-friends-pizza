import React from 'react';
import { BrowserRouter, Route }  from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentUser} from '../actions';
import {Redirect} from 'react-router-dom';
import Nav from './main_comps/Nav';
import HomePage from './main_comps/HomePage';
import Profile from './user_comps/Profile';
import Login from './user_comps/Login';
import Register from './user_comps/Register';
import About from './main_comps/About';
import Create from './crud_comps/Create';
import Edit from './crud_comps/Edit';
import Show from './crud_comps/Show';

// function  PrivateRoute ({component: Component, authenticated, ...rest}) {
//   return (
//     <Route
//       render={ 
//           (props) => {
//             if(authenticated) {
//               return <Component {...props} />
//             }else{
//               return <Redirect to='/login' />
//             }
//           }
//       }
//     />
//   )
// }

class App extends React.Component {




  componentDidMount(){
       this.props.getCurrentUser()
  }

  render() {
     return (
      <div className="App">
        <BrowserRouter>
        <Nav />
          <Route path='/' exact component={HomePage} />
          <Route path='/about' exact component={About} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          
          <Route path='/create'exact component={Create}          />
          
          <Route path='/edit/:id'   exact component={Edit} />
          <Route path='/show' exact component={Show} />
        </BrowserRouter>
       </div>
    );
  }

}
// Since we will be accessing to the user state inside of NAV component we not going to pass our state object here instead we will pass
// Action to get current user .
const mapStateToProps=(store)=>({store})
export default connect(mapStateToProps,{getCurrentUser})(App);
