import { combineReducers } from 'redux';

import { toastReducer as toast } from 'react-native-redux-toast';
import { reducer as products } from './products';
import { reducer as login } from './auth';

const reducers = combineReducers({
  products,
  login,
  toast,
});

export default reducers;
