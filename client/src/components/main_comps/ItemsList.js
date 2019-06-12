// Items List Component  Will get access to our store with connect function.
// We made store available through props.items.

import React  from 'react';
import {connect} from 'react-redux';
// import {addToCart} from '../../actions';
import {Link} from 'react-router-dom';
import {selectedItem,deleteItem,retrieveItemToEdit,addToCart} from '../../actions'
 
class ItemsList extends React.Component {
  
     
    editButtonRender(itemId){
      if(this.props.store.auth && this.props.store.auth.admin){
       return(
           <div>
           <Link to={'edit/'+itemId} className="btn btn-warning" >Edit Item</Link>
           <button onClick={()=>{this.props.deleteItem(itemId); }}  className="btn btn-danger" >Delete Item</button>
           </div>
           )
      }
    }

  renderButton(item){
      if(this.props.store.auth){
        return  <button  className="btn btn-danger" onClick={()=>{this.props.addToCart(item);}} > Add </button>
      }else{
        return  <Link to='/login' className="btn btn-danger"> Add </Link>
      }
  }
  
  render(){
      return(
            this.props.store.items.map(item => {
                  return (
                    <div key={item._id} style={{ width: '25%' }} className="card" >
                        <img src={item.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{item.name}</h5>
                          <p className="card-text">
                            {item.description}
                          </p> 
                          <button onClick={ ()=>{this.props.selectedItem(item)} }  data-toggle="modal" data-target="#exampleModalLong" className="btn btn-warning" >Details</button>
                          {this.renderButton(item)} 
                          {this.editButtonRender(item._id)}
                        </div>
                      </div>
                   )
            })
      )

  }
}


const mapDispatchToProps = (dispatch)=>{ 
  return {
     selectedItem: (item) => {
        dispatch(selectedItem(item))
      },
    //   passing zipcode value to zipcode action
     addToCart: (item) => {
       dispatch(addToCart(item) )
     },
     retrieveItemToEdit: (item)=> {
       dispatch(retrieveItemToEdit(item) )
     },
     deleteItem: (itemId)=>{
         dispatch(deleteItem(itemId) )
     }
     
  } 
}

      const mapStateToProps = (store) => ({store})

      export default connect(mapStateToProps,mapDispatchToProps)(ItemsList)
