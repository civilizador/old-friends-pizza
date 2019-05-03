export default (state={}, action)=>{
  switch (action.type) {
    case 'GET_USER_DATA':
    return action.payload
      break;
    default:
      return state;
  }
}
