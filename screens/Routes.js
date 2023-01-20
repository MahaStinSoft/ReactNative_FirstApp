import * as React from 'react';
import { View, Button, Text, Animated } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import DashBoardScreen from './DashBoardScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import DetailScreen from './DetailScreen';
import SettingScreen from './SettingScreen';


const Stack = createStackNavigator();

export default function Routes() {
return (
    <Stack.Navigator initialRouteName="AuthLoadingScreen" headerMode='none'>
      <Stack.Screen name="LoginScreen" component={LoginScreen}  options={{headerTintColor:'#fff',
    headerStyle:{
        backgroundColor: 'tomato'
    }}} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
      <Stack.Screen name="AuthLoadingScreen" component={AuthLoadingScreen} />
    </Stack.Navigator>
  );
}