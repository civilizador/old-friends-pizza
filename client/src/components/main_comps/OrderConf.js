import React from 'react';


export default class OrderConf extends React.Component {
  componentDidMount(){
    console.log('Order Confirmation')
  }
  showConfMsg(order){
      console.log(order)
  }
  render(){
    return(
      <h1>Order is confirmed</h1>
    )
  }
}
