import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';
import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHiddenAction } from '../../redux/cart/cartActions';
import './CartDropDown.scss';

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(({ id, ...cartItem }) => (
          <CartItem key={id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <Button
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHiddenAction());
      }}
    >
      GO TO CHECKOUT
    </Button>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
