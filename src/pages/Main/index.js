import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Search from '~/pages/Search';
import Home from '~/pages/Home';
import Notification from '~/pages/Notification';
import Profile from '~/pages/Profile';

const TabNavigator = createBottomTabNavigator({
  Home,
  Search,
  Notification,
  Profile,
});

export default createAppContainer(TabNavigator);
