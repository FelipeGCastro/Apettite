import React from 'react';

import '~/config/ReactotronConfig';
import { Provider } from 'react-redux';
import { Toast } from 'react-native-redux-toast';
import store from './store';

import Routes from '~/routes';
import App from './App';

const Root = () => (
  <Provider store={store}>
    <Toast messageStyle={{ color: 'white' }} />
    <App />
  </Provider>
);

export default Root;
