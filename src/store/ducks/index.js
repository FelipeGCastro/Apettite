import { combineReducers } from 'redux';

import { toastReducer as toast } from 'react-native-redux-toast';
import { reducer as products } from './products';
import { reducer as login } from './auth';
import { reducer as users } from './users';
import { reducer as order } from './order';

export default combineReducers({
  products,
  login,
  toast,
  users,
  order,
});
