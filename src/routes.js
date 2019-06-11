import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Main from '~/pages/Main';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';

export default function createNavigator(isLoggedIn = false) {
  return createAppContainer(
    createSwitchNavigator(
      {
        Login,
        Main,
        SignUp,
      },
      {
        initialRouteName: isLoggedIn ? 'Main' : 'Login',
      },
    ),
  );
}
