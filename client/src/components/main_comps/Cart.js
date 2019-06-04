import React  from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Cart extends React.Component {

  countItemsInCart(){
    if(this.props.store.auth)
    return this.props.store.auth.cart.length
  }
  
  renderCartItems(){
    if(this.props.store.auth)
        return(
            this.props.store.auth.cart.map((cartItem)=>{
                return (
                    <li className="list-group-item">{cartItem.name}
                        <span className='float-right'><i onClick={()=>{this.removeCartItem(cartItem._id)}} className="far fa-times-circle"></i></span>
                    </li>)
            })
    )
  }
  
  removeCartItem(itemId){
        console.log(itemId)
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


export default connect(mapStateToProps,null)(Cart);
