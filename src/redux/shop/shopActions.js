import shopActionTypes from './shopTypes';
import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase';

export const fetchCollectionsAction = () => ({
  type: shopActionTypes.FETCH_COLLECTIONS
});

export const fetchCollectionsSuccessAction = (collections) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailureAction = (errorMessage) => ({
  type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

const fetchCollectionsAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsAction());

  collectionRef
    .get()
    .then((snapshot) => {
      const collections = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionsSuccessAction(collections));
    })
    .catch((error) => dispatch(fetchCollectionsFailureAction(error.message)));
};

export default fetchCollectionsAsync;
