import React ,{ Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
  }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit = e => {
      e.preventDefault();
      const userData = {
          username: this.state.username,
          password: this.state.password
        };
      console.log(userData);
      axios({
        method:"post",
        url:"/api/login",
        data: userData
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
  render() {
    return (
        <div className="container col-7 mx-auto" style={{ marginTop: "20vh" }}>
          <div style={{ marginTop: "4rem" }} className="row">
            <div className="col s8 offset-s2">
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4>
                  <b>Login</b> below
                </h4>
                <p className="grey-text text-darken-1">
                  Don't have an account? <Link to="/register">Register</Link>
                </p>
              </div>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input 
                    className="form-control"
                    onChange={this.onChange}
                    value={this.state.username}
                    id="username"
                    type="username"
                  />
                  <label htmlFor="username">Username</label>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    onChange={this.onChange}
                    value={this.state.password}
                    id="password"
                    type="text"
                  />
                  <label htmlFor="password">Password</label>
                </div>
                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    style={{
                      width: "150px",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-lg btn-outline-info float-right"
                  >
                 LOGIN
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
            </div>
            <p className="btn-text"><b>Sign in with google</b></p>
          </div>
          
        </div>
    );
  }
}
   
  
  export default  Login;