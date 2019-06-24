export default (activeUser=null, action)=>{
  switch (action.type) {
    case 'GET_USER_DATA':
          return action.payload || false
    case 'CART':
      return {
        ...activeUser,
        cart: action.payload,
      }
    case 'WRONG_PASSWORD':
          return action.payload
    default:
      return activeUser;
  }
}
