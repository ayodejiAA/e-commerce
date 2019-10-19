import React from 'react';
import { connect } from 'react-redux';
import {
  addItemAction,
  removeItemAction,
  clearItemFromCartAction
} from '../../redux/cart/cartActions';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem, addItem, removeItem, clearItemFromCart }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          role="button"
          tabIndex="0"
          onClick={() => removeItem(cartItem)}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          role="button"
          tabIndex="0"
          onClick={() => addItem(cartItem)}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        role="button"
        tabIndex="0"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemAction(item)),
  removeItem: (item) => dispatch(removeItemAction(item)),
  clearItemFromCart: (item) => dispatch(clearItemFromCartAction(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
