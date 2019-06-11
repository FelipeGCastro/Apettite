import { call, put } from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
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

    const loginId = yield call(api.get, 'sessions');
    yield put(LoginActions.loginSuccess(response.data.token, loginId.data));

    NavigationService.navigate('Main');
  } catch (error) {
    yield put(toastActions.displayError('Algo errado, Verifique seu e-mail/senha!'));
    console.tron.log(error);
  }
}
export function* signUp({
  firstName, lastName, email, password, passwordConfirmation,
}) {
  try {
    const response = yield call(api.post, 'users', {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirmation: passwordConfirmation,
    });

    yield put(toastActions.displayInfo('Cadastro feito com sucesso, aguarde um momentinho!', 5000));

    yield put(LoginActions.loginRequest(response.data.email, password));
  } catch (error) {
    yield put(toastActions.displayError('Algo errado, Verifique seu e-mail/senha!'));
    console.tron.log(error);
  }
}

export function* signOut() {
  yield call([AsyncStorage, 'clear']);
}
