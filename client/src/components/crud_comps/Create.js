import React ,{ Component } from "react";
import {connect} from 'react-redux';
import { Link,Redirect } from "react-router-dom";
import { createItemAction } from "../../actions";


class Create extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      description: "",
      category: "",
      timeToCook: "",
      featured: ""
    };
  }
  onChange = e => {
    // on input change this function sets component level state to the input value
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit = async e => {
      e.preventDefault();
      // Trigering login action and passing input data from the login form.
      this.props.createItemAction(this.state)
    }

  render() {
    return (

        <div className="container col-7 mx-auto" style={{ marginTop: "20vh" }}>
          <div style={{ marginTop: "4rem" }} className="row">
            <div className="col s8 offset-s2">
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4> <b>Add a New Item</b> </h4>
              </div>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input className="form-control"
                    onChange={this.onChange} value={this.state.name}
                    id="name" type="username"
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-group">
                  <input className="form-control"
                   onChange={this.onChange} value={this.state.price}
                   id="price" type="number"
                  />
                  <label htmlFor="price">Price</label>
                </div>
                <div className="form-group">
                  <textarea className="form-control"
                   onChange={this.onChange} value={this.state.description}
                   id="description" type="text"
                  />
                  <label htmlFor="description">Description</label>
                </div>
                <div className="form-group">
                  <input className="form-control"
                   onChange={this.onChange} value={this.state.category}
                   id="category" type="text"
                  />
                  <label htmlFor="category">Category</label>
                </div>
                <div className="form-group">
                  <input className="form-control"
                   onChange={this.onChange} value={this.state.timeToCook}
                   id="timeToCook" type="number"
                  />
                  <label htmlFor="timeToCook">Time to Cook</label>
                </div>

                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                    <button
                      style={{ width: "150px", borderRadius: "3px", letterSpacing: "1.5px", marginTop: "1rem" }}
                      type="submit"
                      className="btn btn-lg btn-outline-info float-right">
                       ADD
                    </button>
                </div>

              </form>
            </div>
          </div>

        </div>
    );
  }
}
const mapStateToProps = (allItems) => ({allItems})

export default connect(mapStateToProps, { createItemAction })(Create)
