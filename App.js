import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import LoginScreen from './screens/LoginScreen';
import AppTabNavigator from './components/AppTabNavigator'

export default function App() {
  return (
    <LoginScreen/>
  );
}
const switchNavigator = createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  BottomTab:{screen:AppTabNavigator}
})

const AppContainer = createAppContainer(switchNavigator)