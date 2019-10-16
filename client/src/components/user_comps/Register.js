import React, { Component } from "react";
import {connect} from 'react-redux';
import { Link,Redirect } from "react-router-dom";
import {registerAction} from "../../actions";

import axios from 'axios';

class Register extends Component {
  state = {
      name: "", email: "", password: "", password2: "", username: "", phone: "",state:"", city:"",
      address: "",address2:"", phone: "", zipCode:"", errors: {}, submitted:false
    };
  constructor(props){
    super(props)
      this.name = React.createRef(); this.phone= React.createRef();  this.username = React.createRef();
      this.address = React.createRef();this.city = React.createRef(); this.address2 = React.createRef(); 
      this.zipCode = React.createRef();  this.password2 = React.createRef();  this.phone = React.createRef();
      this.email = React.createRef(); this.password = React.createRef(); this.submit = React.createRef(); 
  }
 

  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  
  
  onSubmit = async(e) => {
      e.preventDefault()
        if(  document.getElementById("password").value != document.getElementById("password2").value  ){
           this.setState({submitted:"password_mismatch"});
           console.log(' Registered successfully')
        }else{
           const newUser =  this.state;
           console.log(newUser)
           let response = await this.props.registerAction(newUser)
           if(response.status === 200){
               console.log(' Registered successfully here is response ',response)
               this.setState({submitted:true})
            }else{
              switch(response){
                case 'dublicateUser':
                  {console.log("Username already exist")}
                default: {
                  console.log("Some other error")
                }  
              
                
              }
          
              console.log('error ',response)
              
            }
        }
  }
  
  passwordMismatchMessage = ()=>{
    if(this.state.submitted === "password_mismatch"){
      return(<div class="alert alert-danger" role="alert">
              Passwords Do not match !
            </div>)
    }else if(this.state.submitted){
       return <Redirect to='/'/>;
    }else{
      return(
            <div class="alert alert-danger" role="alert">
             Please register Bellow ! All Fields are mandatory.
            </div>
            )
            
    }
  }

  onKeyUp = (e,target) => {
    if(e.keyCode === 13){
      switch (target) {
        case 'username' :
          this.name.current.focus();
          break;
        case 'name' :
          this.address.current.focus();
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
        default :
          this.submit.current.focus();
          break;
      }

    }
  }
  render() {
  return (
      <div className="container col-7 mx-auto" style={{ marginTop: "20vh" }}>
        <div className="row">
          <div className="col s8 offset-s2">

            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
             
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form onSubmit={this.onSubmit}>
              {this.passwordMismatchMessage()}
              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                required
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
                required
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
                <label htmlFor="address">Street Name</label>
                <input
                required
                  className='form-control'
                  ref={this.address}
                  onKeyUp={(e)=>{this.onKeyUp(e,'address')}}
                  onChange={this.onChange}
                  value={this.state.address}
                  id="address"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Unit/Apt number</label>
                <input
                required
                  className='form-control'
                  ref={this.address2}
                  onKeyUp={(e)=>{this.onKeyUp(e,'address2')}}
                  onChange={this.onChange}
                  value={this.state.address2}
                  id="address2"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                required
                  className='form-control'
                  ref={this.city}
                  onKeyUp={(e)=>{this.onKeyUp(e,'city')}}
                  onChange={this.onChange}
                  value={this.state.city}
                  id="city"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Zip code</label>
                <input
                required
                  className='form-control'
                  ref={this.zipCode}
                  onKeyUp={(e)=>{this.onKeyUp(e,'zipCode')}}
                  onChange={this.onChange}
                  value={this.state.zipCode}
                  id="zipCode"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone number</label>
                <input
                required
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
                <label htmlFor="email">Email (for order confirmation only. No promotions ever!)</label>
                <input
                required
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
                required
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
                required
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
                  className="btn btn-lg btn-outline-warning"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
        
      </div>
    );
  }
}
const mapStateToProps = (store) => ({store})
export default connect(mapStateToProps, { registerAction })(Register)

