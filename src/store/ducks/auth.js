import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['token', 'loginId'],
  initCheckSuccess: null,
  signOut: null,
  signUpRequest: ['firstName', 'lastName', 'email', 'password', 'passwordConfirmation'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  authChecked: false,
  signedIn: false,
  token: null,
  loginId: null,
});

/* Reducers */

// export const reducer = state =>
//   state.merge({ data: [] });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_SUCCESS]: (state, { token, loginId }) => state.merge({ signedIn: true, token, loginId }),
  [Types.INIT_CHECK_SUCCESS]: state => state.merge({ authChecked: true }),
  [Types.SIGN_OUT]: state => state.merge({ signedIn: false, token: null, loginId: null }),
});
