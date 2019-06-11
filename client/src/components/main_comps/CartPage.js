import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeFromCart} from '../../actions';

class CartPage extends React.Component{
  countItemsInCart(){
    if(this.props.store.auth)
    return this.props.store.auth.cart.length
  }
  renderCartItems(){
    if(this.props.store.auth){
        return(
            this.props.store.auth.cart.map((cartItem, index)=>{
                return (
                  <li  key={index} className="list-group-item">
                    <div className='row'>
                      <div class="col-sm-2 col-xs-2 col-md-2">
                        <img src={cartItem.image} className='cartItemImage' alt="" />
                      </div>
                      <div class="col-xs-3 col-sm-3  col-md-3">
                         <p className='CartPageText'> {cartItem.name} </p>
                      </div>
                      <div class="col-xs-3 col-sm-3  col-md-3">
                          <p className='CartPageText'> Extra </p>
                      </div>
                      <div class="col-xs-2 col-sm-2 col-md-2 ">
                        <p className='CartPageText'> Total </p>
                      </div>
                      <div class="col-xs-2 col-sm-2 col-md-2 ">
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

  render(){
      return(
                <div className="container" style={{marginTop: "15rem"}} aria-labelledby="navbarDropdown">
                    <ul className="list-group">
                    <li    className="list-group-item">
                      <div className='row'>
                        <div class="col-sm-2 col-xs-2 col-md-2">
                         </div>
                        <div class="col-xs-3 col-sm-3  col-md-3">
                           <p className='CartPageText'> Name </p>
                        </div>
                        <div class="col-xs-3 col-sm-3  col-md-3">
                            <p className='CartPageText'> Extra </p>
                        </div>
                        <div class="col-xs-2 col-sm-2 col-md-2 ">
                          <p className='CartPageText'> Total </p>
                        </div>
                        <div class="col-xs-2 col-sm-2 col-md-2 ">
                          Remove
                          </div>

                        </div>
                    </li>
                        {this.renderCartItems()}
                    </ul><br/>
                 </div>
          )
  }

}
const mapStateToProps = (store)=>({store})
export default connect(mapStateToProps,{removeFromCart})(CartPage)
