import React, { Component } from 'react';
import './user_comps.css';
 import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {updateUser} from '../../actions'
import Map from './Gmaps.js'

class Profile extends Component {
  state = {
      name: this.props.store.auth.name, email: this.props.store.auth.email, password: "", password2: "", username: this.props.store.auth.username,
      address: this.props.store.auth.address, phone: this.props.store.auth.phone, errors: {}, submitted:false , currentSection: "profileInfo"
    };
  constructor(props){
    super(props)
      this.name = React.createRef(); this.phone= React.createRef();  this.username = React.createRef();
      this.address = React.createRef(); this.password2 = React.createRef();
      this.email = React.createRef(); this.password = React.createRef(); this.submit = React.createRef();
  }
  onSubmit=(e)=>{
    e.preventDefault()
    const updatedUser1 = this.state
    console.log(updatedUser1)
    this.props.updateUser(updatedUser1)
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
    if(this.state.currentSection==='profileInfo'){
      return (
        <div className="row container mx-auto" style={{ padding: "120px"  }}>

        <div class="btn-toolbar mb-3" role="toolbar" style={{ position: "fixed", left:"10px", top: "120px"  }}>
          <div class="btn-group-vertical mr-2" role="group" aria-label="First group">
            <button type="button" class="btn btn-lg btn-secondary">Profile Info</button>
            <button type="button" class="btn btn-lg btn-secondary">My Orders</button>
            <button type="button" class="btn btn-lg btn-secondary">Contact Us</button>
          </div>
        </div>

         <div className='col-7'>

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
                  <label htmlFor="address">Address</label>
                  <input
                    className='form-control'
                    ref={this.address}
                    // onKeyUp={(e)=>{this.onKeyUp(e,'addr')}}
                     onChange={this.onChange}
                    value={this.state.address}
                    id="address"
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
                    Update
                  </button>
                </div>
                </form>
             </div>


       <div className="col-5" style={{ marginTop: "20vh" , float: "left" }}>
       <Map/>
        </div>
     </div>


      );
    }else {
      return(
        <div className="row container mx-auto" style={{ padding: "120px"  }}>
            <h2> YOUR ORDERS </h2>
        </div>
      )
    }
  }
}


const mapStateToProps = (store) => ({store})

export default connect(mapStateToProps, {updateUser})(Profile)
