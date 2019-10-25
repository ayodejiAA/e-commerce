import shopActionTypes from './shopTypes';

export const updateCollectionsAction = (collections) => ({
  type: shopActionTypes.UPDATE_COLLECTIONS,
  payload: collections
});
