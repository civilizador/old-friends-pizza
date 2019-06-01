export default (allItems=null, action)=>{
  switch (action.type) {
    case 'GET_ALL_ITEMS':
          return action.payload 
    case 'GET_ITEMS_BY_CAT':
          return action.payload
    default:
          return allItems;
  }
}
