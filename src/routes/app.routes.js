import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
  return(
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: '#0A1033'
        }
      }}
    > 
      <Screen 
        name="SignIn"
        component={SignIn}
      />
    </Navigator>
  )
}