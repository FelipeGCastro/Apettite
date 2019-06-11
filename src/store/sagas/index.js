import { all, takeLatest } from 'redux-saga/effects';

import { ProductsTypes } from '~/store/ducks/products';
import { UsersTypes } from '~/store/ducks/users';
import { AuthTypes } from '~/store/ducks/auth';
import { OrderTypes } from '~/store/ducks/order';

import { load, createProduct, loadProduct } from './products';
import { loadOrders } from './order';

import { loadUsers } from './users';
import { login, init, signUp, signOut } from './auth';

export default function* rootSaga() {
  yield all([
    init(),
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT, signOut),

    takeLatest(ProductsTypes.CREATE_PRODUCT, createProduct),
    takeLatest(ProductsTypes.LOAD_REQUEST, load),
    takeLatest(ProductsTypes.LOAD_PRODUCT_REQUEST, loadProduct),

    takeLatest(UsersTypes.LOAD_USERS_REQUEST, loadUsers),

    takeLatest(OrderTypes.LOAD_ORDER_REQUEST, loadOrders),
  ]);
}
