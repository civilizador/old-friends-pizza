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
                    <li key={index} className="list-group-item">
                        <div>
                            <img src={cartItem.image} className='cartItemImage' alt="" />
                            {cartItem.name}
                            <span className='float-right'><i onClick={()=>{this.removeCartItem(index)}} className="far fa-times-circle"></i></span>
                        </div>
                    </li>)
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
                        {this.renderCartItems()}
                    </ul><br/>
                 </div>
           
          )
  }
 
}
const mapStateToProps = (store)=>({store})
export default connect(mapStateToProps,{removeFromCart})(CartPage)