import React from 'react';

import CollectionPreview from '../CollectionPreview/CollectionPreview';
import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...collection }) => (
      <CollectionPreview
        key={id}
        title={collection.title}
        items={collection.items}
      />
    ))}
  </div>
);

export default CollectionsOverview;
