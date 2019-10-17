import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHiddenAction } from '../../redux/cart/cartActions';
import ShoppingIcon from '../../assets/images/shopping-bag.svg';
import { selectCartItemsCount } from '../../redux/cart/cartSelectors';
import './CartIcon.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div
    className="cart-icon"
    role="menuitem"
    tabIndex="0"
    onClick={toggleCartHidden}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHiddenAction())
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon);
