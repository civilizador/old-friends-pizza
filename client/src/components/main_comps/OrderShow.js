import React from 'react';
import {connect} from 'react-redux';
 

class OrderShow extends React.Component {
  componentDidMount(){
    console.log('Order SHOW')
  }

  render(){
    return(
      <h1>ORDER SHOW PAGE</h1>
    )
  }
}


export default OrderShow
