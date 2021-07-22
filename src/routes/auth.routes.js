import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TabsNavigation } from '../components/TabNavigation';
import { Background } from '../components/background';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: {
          backgroundColor: <Background />,
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