import { takeLatest, put, all, call } from 'redux-saga/effects';

import UserActionTypes from '../user/userTypes';
import { clearCartAction } from './cartActions';

export function* clearCartOnSignOut() {
  yield put(clearCartAction());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
