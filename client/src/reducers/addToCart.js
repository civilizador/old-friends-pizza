export default (added=[],action)=>{
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...added,action.payload]
    default:
      return added
  }
}
