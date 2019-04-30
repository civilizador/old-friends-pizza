import React, { Component } from 'react';

class GoogleAuth extends Component {
  state={isSignedIn:null,auth:null}
  
  componentDidMount=()=>{
    window.gapi.load('client:auth2',()=>{
      window.gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: 'email'
      }).then(()=>{
          this.auth = window.gapi.auth2.getAuthInstance(); 
          this.setState({isSignedIn:this.auth.isSignedIn.get()});
          
          console.log(this.state.isSignedIn)  
      })
        .catch((err)=>{console.log(err)})
    })
    
  }
  
  signIn=()=>{
    this.auth.signIn();
  }
  signOut=()=>{
    this.auth.signOut();
  }
  
  renderAuthMenu=()=>{
    switch(this.state.isSignedIn){
      case true:
        return (<div className="dropdown-menu" aria-labelledby="navbarDropdown"> 
                  <button  onClick={()=>this.signOut()}  className="dropdown-item">SignOut </button>
                </div>  )
      case false:
        return (<div className="dropdown-menu" aria-labelledby="navbarDropdown"> 
                    <button onClick={()=>this.signIn()} className="dropdown-item">  Login </button>
                    <button className="dropdown-item"> Register</button>
                </div>  )
      default:
        return (<div className="dropdown-menu" aria-labelledby="navbarDropdown"> 
                    <button className="dropdown-item"> Login </button>
                    <button className="dropdown-item"> Register</button>
                </div>  )
    }
      
  }

  render() {
    return (
      <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-utensils"></i>
            </a>
            {this.renderAuthMenu()}
      </li>
    );
  }
}

export default GoogleAuth;




      
