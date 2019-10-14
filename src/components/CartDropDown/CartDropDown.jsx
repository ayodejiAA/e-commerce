import React from 'react';
import Button from '../Button/Button';
import './CartDropDown.scss';

const CartDropDown = () => (
  <div className="cart-dropdown">
    <div className="cart-items" />
    <Button>GO TO CHECKOUT</Button>
  </div>
);

export default CartDropDown;
