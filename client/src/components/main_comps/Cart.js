import React  from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeFromCart} from '../../actions';

class Cart extends React.Component {

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
                        <div className='eachCartItemDiv'>
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
            <li className="nav-item dropdown dropleft ">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-shopping-cart"></i> <span className="badge badge-light">{this.countItemsInCart()}</span>
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <ul className="list-group">
                        {this.renderCartItems()}
                    </ul>
                </div>
            </li>
          )
  }
    
}


const mapStateToProps = (store) => ({store})


export default connect(mapStateToProps,{removeFromCart})(Cart);
