import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import LoginScreen from './screens/LoginScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';
import CustomSideBar from './components/CustomSideBar';
import SettingsScreen from './screens/SettingsScreen'

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
  Home:{screen: HomeScreen},
  Exchange:{screen: ExchangeScreen}
},

{
defaultNavigationOptions: ({navigation})=>({
  tabBarIcon: ()=>{
    const routeName = navigation.state.routeName;
    if(routeName === "HomeScreen"){
      return(
        <Image
        source={require("./assets/Home.png")}
        style={{width:20, height:20}}
      />
      )

    }
    else if(routeName === "Exchange"){
      return(
        <Image
        source={require("./assets/exchange.png")}
        style={{width:20, height:20,}}
      />)

    }
  }
})
}
);

const AppDrawNavigator = createDrawerNavigator({ 
  Home : { 
    screen : TabNavigator 
  }, 
  Settings : { 
    screen : SettingsScreen 
  } 
}, 
{ 
  contentComponent:CustomSideBar 
}, 
{
   initialRouteName : 'Home' 
})


const switchNavigator = createSwitchNavigator({ 
  WelcomeScreen:{screen: HomeScreen}, 
  AppDrawNavigator : AppDrawNavigator,
})

const AppContainer = createAppContainer(switchNavigator);

