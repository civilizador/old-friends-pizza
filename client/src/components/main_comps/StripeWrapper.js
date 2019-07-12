import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripeWrapper extends React.Component{
  render() {
    return(
      <StripeCheckout/>
    )
  }
}

export default StripeWrapper
