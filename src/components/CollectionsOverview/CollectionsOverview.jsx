import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';
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

const mapStateToProps = (state) => ({
  collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);
