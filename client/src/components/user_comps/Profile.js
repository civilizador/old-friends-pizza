import React, { Component } from 'react';
import './user_comps.css';
 import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'



class Profile extends Component {
  state = {
      name: this.props.store.auth.name, email: this.props.store.auth.email, password: "", password2: "", username: this.props.store.auth.username,
      addr: this.props.store.auth.address, phone: this.props.store.auth.phone, errors: {}, submitted:false
    };
  constructor(props){
    super(props)
      this.name = React.createRef(); this.phone= React.createRef();  this.username = React.createRef();
      this.addr = React.createRef(); this.password2 = React.createRef();
      this.email = React.createRef(); this.password = React.createRef(); this.submit = React.createRef();
  }
  onSubmit=(e)=>{
    e.preventDefault()
    const updatedUser = this.state
    console.log(updatedUser)
    
  }
  onChange=(e)=>{
        this.setState({ [e.target.id]: e.target.value });
  }
  renderHeader = ()=>{
    switch(this.state.submitted){
      case true:
         return <Redirect to='/'/>;
      case false:
         return 'Profile Information'
      default:
         return <Redirect to='/'/>;
    }
  }

  render() {
    return (
      <div className="container col-7 mx-auto" style={{ marginTop: "20vh" }}>
       <div className="container col-7 mx-auto" style={{ marginTop: "20vh" }}>
         <div style={{ marginTop: "4rem" }} className="row">
           <div className="col s8 offset-s2">
             <div className="col s12" style={{ paddingLeft: "11.250px" }}>
               <h4> <b><h2> {this.renderHeader()} </h2></b> </h4>
             </div>
              <form  onSubmit={this.onSubmit} >
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  className='form-control'
                  ref={this.username}
                  // onKeyUp={(e)=>{this.onKeyUp(e,'username')}}
                  onChange={this.onChange}
                  value={this.state.username}
                  id="username"
                  type="text"
                />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className='form-control'
                  ref={this.name}
                  // onKeyUp={(e)=>{this.onKeyUp(e,'name')}}
                  onChange={this.onChange}
                  value={this.state.name}
                  id="name"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="addr">Address</label>
                <input
                  className='form-control'
                  ref={this.addr}
                  // onKeyUp={(e)=>{this.onKeyUp(e,'addr')}}
                   onChange={this.onChange}
                  value={this.state.addr}
                  id="addr"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input
                  className='form-control'
                  ref={this.phone}
                  // onKeyUp={(e)=>{this.onKeyUp(e,'phone')}}
                  onChange={this.onChange}
                  value={this.state.phone}
                  id="phone"
                  type="text"
                />
              </div>
               <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  className='form-control'
                  ref={this.email}
                  // onKeyUp={(e)=>{this.onKeyUp(e,'email')}}
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                className='form-control'
                  ref={this.password }
                  // onKeyUp={(e)=>{this.onKeyUp(e,'password')}}
                  onChange={this.onChange}
                  value={this.state.password}
                  id="password"
                  type="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password2">Confirm Password</label>
                <input
                className='form-control'
                // onKeyUp={(e)=>{this.onKeyUp(e,'password2')}}
                  ref={ this.password2 }
                  onChange={this.onChange}
                  value={this.state.password2}
                  id="password2"
                  type="password"
                />
              </div>
              <div className="form-group" style={{ paddingLeft: "11.250px" }}>
                <button
                  onClick={this.onSubmit}
                  ref={ this.submit }
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-lg btn-outline-success"
                >
                  Sign up
                </button>
              </div>
              </form>
           </div>
       </div>
     </div>
   </div>


    );
  }
}


const mapStateToProps = (store) => ({store})

export default connect(mapStateToProps, null)(Profile)
