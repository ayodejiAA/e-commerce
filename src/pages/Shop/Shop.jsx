import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../containers/CollectionsOverview';
import CollectionPageContainer from '../../containers/CollectionPage';

import fetchCollectionsAsync from '../../redux/shop/shopActions';

class Shop extends Component {
  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:urlParam`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCollections: fetchCollectionsAsync
};

export default connect(
  null,
  mapDispatchToProps
)(Shop);
