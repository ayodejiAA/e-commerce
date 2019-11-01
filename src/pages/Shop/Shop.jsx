import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../containers/CollectionsOverview';
import CollectionPageContainer from '../../containers/CollectionPage';

import { fetchCollectionsStart } from '../../redux/shop/shopActions';

const Shop = ({ fetchCollections, match }) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div className="shop-page">
      <Route exact path={match.path} component={CollectionsOverviewContainer} />
      <Route
        path={`${match.path}/:urlParam`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = {
  fetchCollections: fetchCollectionsStart
};

export default connect(
  null,
  mapDispatchToProps
)(Shop);
