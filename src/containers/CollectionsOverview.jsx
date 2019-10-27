import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import WithSpinner from '../components/WithSpinner/WithSpinner';
import {
  selectIsCollectionsFetching,
  selectCollectionsForPreview
} from '../redux/shop/shopSelectors';
import CollectionsOverview from '../components/CollectionsOverview/CollectionsOverview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
  collections: selectCollectionsForPreview
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
