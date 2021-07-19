import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MyList } from '../../screens/MyList';
import { Profile } from '../../screens/Profile';
import { Wallet } from '../../screens/Wallet';

const Tab = createBottomTabNavigator();

const renderTabIcon = (iconName, color) => {
  return <Icon name={iconName} size={25} color="#1CC0A0" />;
};

export function TabsNavigation(){
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
      }}
    >
      <Tab.Screen 
        name="Lista"
        component={MyList}
        options={{
          tabBarIcon: ({ color }) => renderTabIcon("th-list", color),
        }}
      />

      <Tab.Screen 
        name="Carteira"
        component={Wallet}
        options={{ tabBarIcon: ({ color }) => renderTabIcon("wallet", color) }}
      />

      <Tab.Screen 
        name="Perfil"
        component={Profile}
        options={{ tabBarIcon: ({ color }) => renderTabIcon("user", color) }}
      />
    </Tab.Navigator>
  );
}

