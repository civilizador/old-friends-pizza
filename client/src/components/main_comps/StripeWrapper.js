import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripeWrapper extends React.Component{
  render() {
    return(
      <StripeCheckout  
          amount={this.props.cartTotal}
          token ={token=>console.log(token)}
          stripeKey = {process.env.REACT_APP_STRIPE_PUBLIC_KEY}/>
    )
  }
}

export default StripeWrapper
