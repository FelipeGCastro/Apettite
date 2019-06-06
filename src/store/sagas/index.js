import { all, takeLatest } from 'redux-saga/effects';

import { ProductsTypes } from '~/store/ducks/products';
import { LoginTypes } from '~/store/ducks/auth';

import { load } from './products';
import { login, init } from './auth';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
    takeLatest(ProductsTypes.LOAD_REQUEST, load),
  ]);
}
