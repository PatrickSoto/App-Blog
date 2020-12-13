import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { MainScreen } from '../sceens/MainScreen';
import { PostScreen } from '../sceens/PostScreen';
import { AboutScreen } from '../sceens/AboutScreen';
import { CreateScreen } from '../sceens/CreateScreen';
import { THEME } from '../theme';
import { BookedScreen } from '../sceens/BookedScreen';

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff"
    },
    headerTintColor: Platform.OS === "android" ? "#fff" : THEME.MAIN_COLOR
  }
}

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: PostScreen
  },
  navigatorOptions
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: PostScreen,
  },
  navigatorOptions
)

const bottomTabsConfig = {
  Post: {
    screen: PostNavigator,
    navigationOptions: {
      tabBarLabel: 'Principal',
      tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.tintColor}/>
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Favoritos',
      tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.tintColor}/>
    }
  }
}