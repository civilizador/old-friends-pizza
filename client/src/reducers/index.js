import {combineReducers} from 'redux';
import AuthReducer from  './auth_reducer' ;
import LoginStatus from  './user_loged_in.js' ;

export default combineReducers({
//Auth piece of state will be accessiable inside of the react components.
  auth: AuthReducer,
  logedIN: LoginStatus
})
