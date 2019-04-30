import React  from 'react';

class HomePage extends React.Component {
 
  render() {
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
      </div>
    );
  }
}
 
export default HomePage;
 