import React from 'react'
import {connect} from 'react-redux'
import {Link,Redirect} from 'react-router-dom'
import {removeFromCart,currentlyAddingToppingTo,addOrder} from '../../actions';
import Toppings from './Toppings'
import StripeWrapper from './StripeWrapper'
class CartPage extends React.Component{
state={tips:0,tax:0,orderSubmitted:false}

  returnPaymentButtons(){
   const stripeTotal = this.getCartTotal()*100
    if(this.props.store.auth){
      return(
          <div>
              <StripeWrapper/>
              <button
                style={{height:'32px'}}
                onClick={this.createOrder}
                className='btn btn-sm btn-success float-left'>
                Pay Cash
              </button>
          </div>
        )
    }
  }
  redirectOnSubmit(){
    switch (this.state.orderSubmitted) {
      case false:
          return(<hr/>)
       case true:
          return(<Redirect to='/cart/orderConf'/>)
      default:
          return(<hr/>)

    }
  }
  countItemsInCart(){
    if(this.props.store.auth)
    return this.props.store.auth.cart.length
  }
  getCartTotal(){
        if(this.props.store.auth){
            if(this.props.store.auth.cart){
              const cart1 = this.props.store.auth.cart
              const totalItemsPrice = cart1.reduce((sum,items) => sum + items.price, 0)
                  let toppingSum=0
                  cart1.forEach((item)=>{
                    toppingSum += item.toppings.reduce((sum,items) => sum + items.price, 0)
                  })
                  console.log(totalItemsPrice,toppingSum)
                  return parseInt(totalItemsPrice) + parseInt(toppingSum) + parseInt(this.state.tips)
                }else{
                    return 0
                }
            }
             else{
                 return 0
             }
    }
  renderToppings(index){
    if(this.props.store.auth && this.props.store.auth.cart[index].toppings.length > 0 ){
      return(
         this.props.store.auth.cart[index].toppings.map((topping)=>{
          return (
            <span  key={index + Math.random()*155}>{topping.name} , </span>
          )
          })
        )

    }
  }
  renderCartItems(){
    if(this.props.store.auth.cart){
        return(
            this.props.store.auth.cart.map((cartItem, index)=>{
                return (
                  <li  key={cartItem.name + Math.random()*55} className="list-group-item">
                    <div className='row'>
                      <div className="col-sm-2 col-xs-2 col-md-2">
                        <img src={cartItem.image} className='cartItemImage' alt="" />
                      </div>
                      <div className="col-xs-3 col-sm-3  col-md-3">
                         <p className='CartPageText'> {cartItem.name} </p>
                      </div>
                      <div className="col-xs-3 col-sm-3  col-md-3">
                          <p className='CartPageText'> {this.renderToppings(index)}</p>
                          <button className='btn btn-sm btn-outline-danger'  data-toggle="modal" data-target="#exampleModalLong"
                                  onClick={() => {  this.props.currentlyAddingToppingTo(index) } } >
                            Addons
                          </button>
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 ">
                        <p className='CartPageText'> Total </p>
                      </div>
                      <div className="col-xs-2 col-sm-2 col-md-2 ">
                      <span><i onClick={()=>{this.removeCartItem(index)}} className="far fa-times-circle"></i></span>
                      </div>

                      </div>
                  </li>
                )
            })
        )
    }else{
       return(
          <div className='mx-auto'>
            <hr />
            <p>Your Cart is Empty</p>
        </div>
        )
    }
  }
  removeCartItem(itemIndex){
      console.log('Cart.js line 26', itemIndex)
    this.props.removeFromCart(itemIndex)
  }

  createOrder=async()=>{
     let grandTotal = await this.getCartTotal()
     let tax = grandTotal*0.06
     grandTotal = grandTotal + tax + this.state.tips

        this.props.addOrder(this.props.store.auth.cart, grandTotal, this.props.store.auth._id )
        this.setState({orderSubmitted:true})
  }

  render(){
      return(
                <div className="container" style={{marginTop: "15rem"}} aria-labelledby="navbarDropdown">
                    <ul className="list-group">
                    <li    className="list-group-item">
                      <div className='row'>
                        <div className="col-sm-2 col-xs-2 col-md-2">
                         </div>
                        <div className="col-xs-3 col-sm-3  col-md-3">
                           <p className='CartPageText'> Name </p>
                        </div>
                        <div className="col-xs-3 col-sm-3  col-md-3">
                            <p className='CartPageText'> Extra </p>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 ">
                          <p className='CartPageText'> Total </p>
                        </div>
                        <div className="col-xs-2 col-sm-2 col-md-2 ">
                          Remove
                          </div>

                        </div>
                    </li>
                        {this.renderCartItems()}
                        {this.redirectOnSubmit()}
                      <div className='bottomLineTotalCartPage' >
                        <p>Taxes: </p>
                         Tips:
                          <input
                              style={{width:'45px'}}
                              type='number'
                              onChange={ (e)=>{this.setState({tips:e.target.value})}  }
                              value={this.state.tips}/>
                          <h2 className='float-right'>Total : {this.getCartTotal()}</h2>
                      <hr/>
                      </div>

                    </ul><br/>
                    <Toppings />
                    {this.returnPaymentButtons()}
                 </div>

          )
  }

}
const mapStateToProps = (store)=>({store})
export default connect(mapStateToProps,{removeFromCart,currentlyAddingToppingTo,addOrder})(CartPage)
