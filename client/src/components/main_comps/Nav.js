import React from 'react';
import {Link}  from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentUser} from '../../actions'

class Nav extends React.Component {

  renderAuthItems=()=>{
      switch(this.props.auth.auth ){
        case null:
          return
        case false:
          return (<div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to='/login'  className="dropdown-item">Login </Link>
                        <Link to='/register'  className="dropdown-item">Register </Link>
                  </div>  )
        default:
          return (<div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link to='/profile'  className="dropdown-item">Profile </Link>
                        <Link to='/api/logout'  className="dropdown-item">SignOut </Link>
                  </div>  )
      }
  }

  onSearchSubmit=(e)=>{
    e.preventDefault();
  }
  componentDidMount(){
        this.renderAuthItems()
  }
  render(){
         console.log('NAV COMPONENT ',this.props.auth)
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
          <Link  className="navbar-brand" to="/">
            <img  src="logo_transparent.png" width="150" height="150" className="d-inline-block align-top" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/menu"> Menu <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/about">Why Our Pizza</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/current_user" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  By Category
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/menu">Pizza</Link>
                  <Link className="dropdown-item" to="/menu">Steaks</Link>
                  <div className="dropdown-divider"></div>
                 <Link className="dropdown-item" to="/menu">Drinks</Link>
                </div>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0" onSubmit={this.onSearchSubmit}>
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
            </form>
            <ul className="navbar-nav authBUttons">
                <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fas fa-utensils"></i>
                      </a>
                      {this.renderAuthItems()}
                </li>
            </ul>
          </div>
      </nav>
  )
}
}

const mapStateToProps = (auth) => ({auth})
export default connect(mapStateToProps,{getCurrentUser})(Nav);
