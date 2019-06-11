import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import IconFood from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

import Search from '~/pages/Search';
import Home from '~/pages/Home';
import Notification from '~/pages/Notification';
import Profile from '~/pages/Profile';
import ShowProduct from '~/pages/Product/ShowProduct';

const HomeStack = createStackNavigator(
  {
    Home,

    ShowProduct,
  },
  {
    headerMode: 'none',
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Search,
    Notification,
    Profile,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // const iconFood = IconFood;
        // const icon = Icon;

        let iconName;
        if (routeName === 'Home') {
          iconName = 'food';
          const IconComponent = IconFood;
          return <IconComponent name={iconName} size={40} color={tintColor} />;
        }
        if (routeName === 'Search') {
          iconName = 'search';
          const IconComponent = Icon;
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        }
        if (routeName === 'Notification') {
          iconName = 'bell-o';
          const IconComponent = Icon;
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        }
        if (routeName === 'Profile') {
          iconName = 'user-o';
          const IconComponent = Icon;
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        }

        // You can return any component that you like here!
        // return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(TabNavigator);
