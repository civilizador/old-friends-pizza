export default (activeUser=null, action)=>{
  switch (action.type) {
    case 'GET_USER_DATA':
          return action.payload || false
    default:
      return activeUser;
  }
}
