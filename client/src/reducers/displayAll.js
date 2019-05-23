export default (allItems=null, action)=>{
  switch (action.type) {
    case 'GET_ALL_ITEMS':
          return action.payload || false
    default:
          return activeUser;
  }
}
