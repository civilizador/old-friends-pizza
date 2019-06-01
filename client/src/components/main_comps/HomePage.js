import React  from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import {connect} from 'react-redux'
import {fetchAllItems,fetchItemsByCat} from '../../actions'


const SingleItem = () => {
  return (
      <ul> 
      
      </ul>
    )
}

class HomePage extends React.Component {
  
  componentDidMount(){
          this.props.fetchItemsByCat('Pizza')
    }
  
  
  render() {
   console.log(this.props.items.items)
    return (
      <div className="HomePage">
          <div id="mainBanner" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                  <li data-target="#mainBanner" data-slide-to="0" className="active"></li>
                  <li data-target="#mainBanner" data-slide-to="1"></li>
                  <li data-target="#mainBanner" data-slide-to="2"></li>
                </ul>
              
                <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img className='carousel_pizza' src="https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
                    </div>
                    <div className="carousel-item">
                      <img className='carousel_pizza' src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
                    </div>
                    <div className="carousel-item">
                      <img className='carousel_pizza' src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#mainBanner" data-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#mainBanner" data-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </a>
          </div>
          <ScrollableAnchor id={'menu'}>
            <div id='homePage_sec2' className='text-center'>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <button onClick={()=>{  this.props.fetchItemsByCat('Pizza')}}     id='Pizza' type="button" className="btn btn-secondary">Pizza</button>
                  <button onClick={()=>{  this.props.fetchItemsByCat('Steaks')}}    id='Steaks' type="button" className="btn btn-secondary">Steaks</button>
                  <button onClick={()=>{  this.props.fetchItemsByCat('Hoaggies')}}  id='Hoaggies' type="button" className="btn btn-secondary">Hoaggies</button>
                  <button onClick={()=>{  this.props.fetchItemsByCat('Pasta')}}     id='Pasta' type="button" className="btn btn-secondary">Pasta</button>
                  <button onClick={()=>{  this.props.fetchItemsByCat('Sides')}}     id='Sides' type="button" className="btn btn-secondary">Sides</button>
                  <button onClick={()=>{  this.props.fetchItemsByCat('Beverage')}}  id='Beverage' type="button" className="btn btn-secondary">Beverage</button>
                </div>
             </div>
          </ScrollableAnchor>
          <div  className='row container'>
           
          
          </div>
       </div>
    );
  }
}

const mapStateToProps = (items) => ({items})
 
export default connect(mapStateToProps, {fetchItemsByCat})(HomePage)
 