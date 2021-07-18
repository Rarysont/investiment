import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TabsNavigation } from '../components/TabNavigation';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
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
        name="TabsNavigation"
        component={TabsNavigation}
        options={{
          headerShown: false,
          headerBackTitle: 'Profile',
        }}
      />

    </Navigator>
  )
}