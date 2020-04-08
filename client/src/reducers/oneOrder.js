export default (oneOrder=[],action)=>{
      console.log('One order update Reducer Triggered with following payload ', action.payload)
    switch (action.type) {
       case 'ONE_ORDER':
             return action.payload
       default:
             return oneOrder;
     }
   }