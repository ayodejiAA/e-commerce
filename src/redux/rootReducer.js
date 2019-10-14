import { combineReducers } from 'redux';
import userReducer from './user/userReducer';
import cartRducer from './cart/cartReducer';

export default combineReducers({
  user: userReducer,
  cart: cartRducer
});
