import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';
import './CartDropDown.scss';

const CartDropDown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(({ id, ...cartItem }) => (
        <CartItem key={id} item={cartItem} />
      ))}
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropDown);
