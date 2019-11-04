import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.STRIPE_PUB_KEY;

  const onToken = (token) => {
    axios({
      url: '/api/v1/payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(() => {
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log('Payment', error);
        alert(
          'There was an issue with your payment. Please use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="e-commerce"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total price is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
