import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import api from '~/services/api';
import { actionCreators as toastActions } from 'react-native-redux-toast/lib/src/redux/actions';

import UsersActions from '~/store/ducks/users';

export function* loadUsers() {
  try {
    const response = yield call(api.get, 'users');

    yield put(UsersActions.loadSuccess(response.data.data));
  } catch (error) {
    yield put(toastActions.displayError('Algo errado ao tentar achar pessoas'));
    console.tron.log(error);
  }
}
