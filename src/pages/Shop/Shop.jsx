import React, { Component } from 'react';
import SHOP_DATA from './data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class Shop extends Component {
  state = {
    collections: SHOP_DATA
  };

  render() {
    const {
      state: { collections }
    } = this;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...collection }) => (
          <CollectionPreview
            key={id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default Shop;
