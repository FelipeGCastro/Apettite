import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import api from '~/services/api';
import { actionCreators as toastActions } from 'react-native-redux-toast/lib/src/redux/actions';
import ProductsActions from '~/store/ducks/products';

export function* load() {
  try {
    const response = yield call(api.get, 'products');
    yield put(ProductsActions.loadSuccess(response.data));
  } catch (err) {
    yield put(ProductsActions.loadFailure());
  }
}

export function* createProduct({ name, description, price }) {
  console.tron.log(name, description, price);
  try {
    yield call(api.post, 'products', { name, description, price });

    yield put(toastActions.displayInfo('Foi criado com sucesso!'));
    yield put(ProductsActions.loadRequest());
  } catch (err) {
    yield put(toastActions.displayError('Algo errado, tente novamente mais tarde!'));
    console.tron.log(err);
  }
}

export function* loadProduct({ productId }) {
  try {
    const response = yield call(api.get, `products/${productId}`);
    yield put(ProductsActions.loadProductSuccess(response.data));
  } catch (err) {
    yield put(
      toastActions.displayError('Algo errado ao carregar o produto, tente novamente mais tarde!'),
    );
    console.tron.log(err, 'loadProduct');
  }
}
