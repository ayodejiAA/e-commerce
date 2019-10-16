import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHiddenAction } from '../../redux/cart/cartActions';
import ShoppingIcon from '../../assets/images/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden }) => (
  <div
    className="cart-icon"
    role="menuitem"
    tabIndex="0"
    onClick={toggleCartHidden}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> 0 </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
});

export default connect(
  null,
  mapDispatchToProps
)(CartIcon);
