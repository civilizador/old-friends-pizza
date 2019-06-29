import React from 'react';
import {connect} from 'react-redux';
import {addToppToItem} from '../../actions'
const toppings1=[
  {name:'Steak',price:1.5,img:'https://images.pexels.com/photos/1881336/pexels-photo-1881336.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name:'Cheese',price:1.5,img:'https://images.pexels.com/photos/1435184/pexels-photo-1435184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name:'Mushrooms',price:1.5,img:'https://images.pexels.com/photos/259648/pexels-photo-259648.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'},
  {name:'Ham',price:1.5,img:'https://images.pexels.com/photos/533352/pexels-photo-533352.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name:'Onions',price:0,img:'https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'},
  {name:'Bacon',price:1.5,img:'https://images.pexels.com/photos/1930760/pexels-photo-1930760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name:'Sausage',price:1.5,img:'https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'},
  {name:'Black-Olives',price:1.5,img:'https://images.pexels.com/photos/415340/pexels-photo-415340.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'},
  {name:'Green-Peppers',price:1.5,img:'https://images.pexels.com/photos/1434254/pexels-photo-1434254.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'},
]


class Toppings extends React.Component{

    render(){
        // const addingToppingTo = this.props.store.selectedItem
        return(
            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
              <div style={{width:'80rem!important' }} className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">
                      Add extra
                    </h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true"></span>
                    </button>
                  </div>
                  <div className="modal-body">
                     <div className='row'>
                        { toppings1.map( (topping)=>{
                            return (
                              <div key={topping.name} className="card" style={{width: '10rem'}}>
                                <img
                                  src={topping.img}
                                  onClick={()=>{
                                      console.log(topping,this.props.store.addToppingItem, typeof this.props.store.addToppingItem)

                                      this.props.addToppToItem(topping,this.props.store.addToppingItem)
                                    }
                                  }
                                  className="card-img-top" alt="..." />
                                <div className="card-body">
                                  <div className="card-text">
                                   {topping.name}
                                  </div>
                                </div>
                              </div>
                             )
                          } )
                        }
                     </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
            )
    }
}
const mapStateToProps=(store)=>({store})
export default connect(mapStateToProps,{addToppToItem})(Toppings)
