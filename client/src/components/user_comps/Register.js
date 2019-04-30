import React, { Component } from "react";
import { Link} from "react-router-dom";
import axios from 'axios';

class Register extends Component {
  state = {
      name: "", email: "", password: "", password2: "", username: "",
      addr: "", phone: "", errors: {}
    };
  constructor(props){
    super(props)
      this.name = React.createRef(); this.phone= React.createRef();  this.username = React.createRef();
      this.addr = React.createRef(); this.password2 = React.createRef();
      this.email = React.createRef(); this.password = React.createRef(); this.submit = React.createRef();
  }
    componentDidMount() {
    
  }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit =  e => {
      e.preventDefault()
       const newUser =  {
            name:       this.state.name,
            username:   this.state.username,
            email:      this.state.email,
            password:   this.state.password,
            password2:   this.state.password2,
            addr:       this.state.addr,
            phone:      this.state.phone
      };
      console.log(newUser)
   
  axios({
      method: 'post',
      url: 'api/register',
      data: newUser
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  
  }
  onKeyUp = (e,target) => {
    if(e.keyCode === 13){
      switch (target) {
        case 'username' :
          this.name.current.focus();
          break;
        case 'name' :
          this.addr.current.focus();
          break;
        case 'addr' :
          this.phone.current.focus();
          break;
        case 'phone' :
          this.email.current.focus();
          break;
        case 'email' :
          this.password.current.focus();
          break;
        case 'password' :
          this.password2.current.focus();
          break;
        case 'password2' :
          this.submit.current.focus();
          break;
      }
      
    }
  }
  render() {
      const { errors } = this.state;
  return (
      <div className="container col-7 mx-auto" style={{ marginTop: "20vh" }}>
        <div className="row">
          <div className="col s8 offset-s2">
             
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form onSubmit={this.onSubmit}>
              
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  className='form-control'
                  ref={this.username}
                  onKeyUp={(e)=>{this.onKeyUp(e,'username')}} 
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
                  onKeyUp={(e)=>{this.onKeyUp(e,'name')}}
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
                  onKeyUp={(e)=>{this.onKeyUp(e,'addr')}}
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
                  onKeyUp={(e)=>{this.onKeyUp(e,'phone')}} 
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
                  onKeyUp={(e)=>{this.onKeyUp(e,'email')}} 
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
                  onKeyUp={(e)=>{this.onKeyUp(e,'password')}} 
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
                onKeyUp={(e)=>{this.onKeyUp(e,'password2')}} 
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
    );
  }
}

export default  Register ;