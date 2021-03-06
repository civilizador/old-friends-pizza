import React ,{ Component } from "react";
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import {createItem} from '../../actions'
import { Redirect } from "react-router-dom";



class Create extends Component {
state={submitted:false}


  getResult = () =>{
    switch(this.state.submitted){
      case false:
        return "Add New Item"
      case true:
       return <Redirect to='/'/>;
     
      default:
           return <Redirect to='/'/>;
    }
  }

  renderInput(formProps){
    
     return(
        <div className="form-group">
          <label>{formProps.label}</label>
          <input
            type      = {formProps.input.type}
            onChange  = {formProps.input.onChange}
            value     = {formProps.input.value}
            className = "form-control"
          />
          <div>{formProps.meta.error}</div>
        </div>
      )
  }

  onSubmit = values => {
      console.log(values);
      this.props.createItem(values);
      this.setState({submitted:true});
      console.log(this.state.submitted)
  }

  render() {
    
    return (

        <div className="container col-7 mx-auto" style={{ marginTop: "20vh" }}>
          <div style={{ marginTop: "4rem" }} className="row">
            <div className="col s8 offset-s2">
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <h4> <b><h2> {this.getResult()} </h2></b> </h4>
              </div>

              <form onSubmit={this.props.handleSubmit(this.onSubmit)}>

                  <Field name='name' component={this.renderInput} label="Enter Name"  />
                  <Field name='price' component={this.renderInput} label="Enter price" />
                  <Field name='description' component={this.renderInput} label="Enter description" />
                  <Field name='timeToCook' component={this.renderInput} label="Enter timeToCook" />
                  <Field name='featured' component={this.renderInput} label="Is it featured?" />
                  <Field name='category' component={this.renderInput} label="Enter category" />
                  <Field name='image' component={this.renderInput} label="Image URL" />

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


 const validate = (values)=>{
   const errors = {};

   if(!values.name ){errors.name = 'Please Enter Name for the Item'}

   if(!values.timeToCook || isNaN(values.timeToCook) ){errors.timeToCook = 'Please Enter a Valid Time To Cook in minutes'}

   if(!values.category ){errors.category = 'Please Enter a Category for the Item'}

   if(!values.image  ){errors.image = 'Please Enter Image URL'}

   if(!values.price || isNaN(values.price)  ){errors.price = 'Please Enter a Valid Price'}

        return errors
 }
 
const mapStateToProps=(store)=>({store})

  export default reduxForm({
    form: "create_Item",
    validate: validate
  })(connect(mapStateToProps, { createItem })(Create))
