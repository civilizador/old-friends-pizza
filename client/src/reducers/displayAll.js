


export default (allItems=[], action)=>{
  switch (action.type) {
    case 'GET_ALL_ITEMS':
          return action.payload
    case 'GET_ITEMS_BY_CAT':
          return action.payload
    case 'SEARCH_RESULT':
          return action.payload
    case 'SEARCH_RESULT_FALSE':
          return allItems;
    default:
          return allItems;
  }
}
