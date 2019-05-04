import {combineReducers} from 'redux';
import AuthReducer from  './auth_reducer' ;

export default combineReducers({
//Auth piece of state will be accessiable inside of the react components.
  auth: AuthReducer
})
