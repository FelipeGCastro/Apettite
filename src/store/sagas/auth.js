import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { actionCreators as toastActions } from 'react-native-redux-toast/lib/src/redux/actions';
import NavigationService from '~/services/navigation';
import AsyncStorage from '@react-native-community/async-storage';

import LoginActions from '~/store/ducks/auth';

export function* init() {
  const token = yield call([AsyncStorage, 'getItem'], '@apettite:token');

  if (token) {
    yield put(LoginActions.loginSuccess(token));
  }
  yield put(LoginActions.initCheckSuccess());
}

export function* login({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', { email, password });

    yield call([AsyncStorage, 'setItem'], '@apettite:token', response.data.token);
    console.tron.log(response.data.token);
    yield put(LoginActions.loginSuccess(response.data.token));
    NavigationService.navigate('Main');
  } catch (error) {
    yield put(toastActions.displayError('Algo errado, Verifique seu e-mail/senha!'));
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
}
