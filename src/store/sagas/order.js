import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import api from '~/services/api';
import { actionCreators as toastActions } from 'react-native-redux-toast/lib/src/redux/actions';
import OrderActions from '~/store/ducks/order';

export function* loadOrders() {
  try {
    const response = yield call(api.get, 'orders');
    yield put(OrderActions.loadOrderSuccess(response.data));
  } catch (err) {
    yield put(
      toastActions.displayError('Algo errado ao carregar suas Ordens, tente novamente mais tarde!'),
    );
  }
}
