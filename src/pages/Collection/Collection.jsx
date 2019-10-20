import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { selectShopCollection } from '../../redux/shop/shopSelectors';

import './Collection.scss';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, { match }) => ({
  collection: selectShopCollection(match.params.urlParam)(state)
});

export default connect(mapStateToProps)(Collection);
