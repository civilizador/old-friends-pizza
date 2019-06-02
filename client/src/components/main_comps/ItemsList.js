// Items List Component  Will get access to our store with connect function.
// We made store available through props.items.

import React  from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../../actions';

class ItemsList extends React.Component {
  render(){
    console.log('ItemsList component:' , this.props.store.addToCart)
    return(
      this.props.store.items.map(item => {
            return (
              <div key={item._id} style={{ width: '25%' }} className="card" >
                  <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      {item.description}
                    </p> 
                    <button  data-toggle="modal" data-target="#exampleModal" className="btn btn-warning" >Details</button>
                    <button  className="btn btn-danger"  onClick={()=>{  this.props.addToCart(item)} }> Add </button>
                  </div>
                </div>
             )
      })
    )

  }
}

      const mapStateToProps = (store) => ({store})

      export default connect(mapStateToProps, {addToCart})(ItemsList)
