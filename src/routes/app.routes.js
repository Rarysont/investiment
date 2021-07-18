import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

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

      <Screen 
        name="SignUp"
        component={SignUp}
      />
    </Navigator>
  )
}