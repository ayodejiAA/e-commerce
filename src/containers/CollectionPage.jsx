import { connect } from 'react-redux';
import { compose } from 'redux';

import WithSpinner from '../components/WithSpinner/WithSpinner';
import {
  selectIsCollectionsFetching,
  selectShopCollection
} from '../redux/shop/shopSelectors';
import CollectionPage from '../pages/Collection/Collection';

const mapStateToProps = (state, { match }) => ({
  isLoading: selectIsCollectionsFetching(state),
  collection: selectShopCollection(match.params.urlParam)(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
