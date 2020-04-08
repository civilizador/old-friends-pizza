import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Redirect,Link} from 'react-router-dom'
import {getOneOrder} from '../../actions'

class OrderShow extends React.Component {
  componentDidMount(){
    console.log('Order SHOW')
  }
  render(){
    if(this.props.store.oneOrder.length == 0){
      return(<p>Select Order</p>)
    }else{
      return(
        <div className="card text-center"  style={{ paddingLeft: "30px"}}>
            <div className="card-header">
             {this.props.store.oneOrder._id}  
            </div>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-muted">
            {this.props.store.oneOrder.created.split('T')[0]}
            </div>
        </div>
       
        )
    }
      
  }
}


const mapStateToProps = (store) => ({store})

export default connect(mapStateToProps, {getOneOrder})(OrderShow)