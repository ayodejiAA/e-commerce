import SHOP_DATA from './data';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
