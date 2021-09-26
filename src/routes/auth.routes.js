import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { TabsNavigation } from '../components/TabNavigation';
import { EditProfile } from '../screens/EditProfile';
import Graph from '../components/Graph'

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return(
    <Navigator
      headerMode="none"
    >
      <Screen
        name="TabsNavigation"
        component={TabsNavigation}
        options={{
          headerShown: false,
          headerBackTitle: 'Profile',
        }}
      />

      <Screen
        name="EditProfile"
        component={EditProfile}
      />

      <Screen
        name="Graphic"
        component={Graph}
      />
    </Navigator>
  )
}
