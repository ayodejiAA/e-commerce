import React from 'react';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

import './Collection.scss';

const Collection = ({ collection }) =>
  collection && (
    <div className="collection-page">
      <h2 className="title">{collection.title}</h2>
      <div className="items">
        {collection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );

export default Collection;
