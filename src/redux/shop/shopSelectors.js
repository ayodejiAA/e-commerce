import { createSelector } from 'reselect';

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectShopCollection = (urlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => (collections ? collections[urlParam] : null)
  );

export const selectIsCollectionsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
