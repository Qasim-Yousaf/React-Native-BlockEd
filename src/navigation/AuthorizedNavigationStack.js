import React from 'react';
import { createStackNavigator, } from '@react-navigation/stack';

const {
  Navigator,
  // Screen
} = createStackNavigator();

export default function AuthorizedNavigationStack() {
  return (
    <Navigator screenOptions={{ headerShown: false }}
    // initialRouteName="DashboardScreen"
    >
      {/* <Screen name="DashboardScreen" component={DashboardScreen} /> */}
    </Navigator>
  );
}