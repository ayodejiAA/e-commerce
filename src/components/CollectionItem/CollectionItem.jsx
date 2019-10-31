import React from 'react';
import { connect } from 'react-redux';
import Button from '../Button/Button';
import { addItemAction } from '../../redux/cart/cartActions';
import './CollectionItem.scss';

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div style={{ backgroundImage: `url(${imageUrl})` }} className="image" />

      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={() => addItemToCart(item)} inverted>
        Add to cart
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemAction(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
