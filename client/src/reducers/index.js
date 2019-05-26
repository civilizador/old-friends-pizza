import {combineReducers} from 'redux';
import AuthReducer from  './auth_reducer' ;
import LoginStatus from  './user_loged_in.js' ;
// importing redux-form library and use name formReducer for reference
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
//Auth piece of state will be accessiable inside of the react components.
  auth: AuthReducer,
  logedIN: LoginStatus,
  // adding additional state - form to our store. SO we can manage form data through redux.
  form: formReducer
})
