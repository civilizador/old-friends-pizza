export default (selectedItem={},action)=>{
    switch (action.type) {
    case 'ITEM_TO_ADD_TOPPINGS':
          return action.payload
    default:
          return selectedItem;
  }    
}