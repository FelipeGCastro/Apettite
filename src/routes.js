import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import Home from '~/pages/Home';
import CreateProduct from '~/pages/Product/CreateProduct';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        Login,
        CreateProduct,
        Main,
        SignUp,
        Home,
      },
      {
        initialRouteName: isLoggedIn ? 'Main' : 'Login',
      },
    ),
  );
}
