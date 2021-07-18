import * as React from 'react';
import { Text, View } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyList } from '../../screens/MyList';
import { Profile } from '../../screens/Profile';
const Tab = createBottomTabNavigator();

const renderTabIcon = (iconName, color) => {
  return <Icon name={iconName} size={35} color={color} />;
};

export function TabsNavigation(){
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="MyList"
        component={MyList}
        options={{
          tabBarIcon: ({ color }) => renderTabIcon("home", color),
        }}
      />
      <Tab.Screen 
        name="Profile"
        component={Profile}
        options={{ tabBarIcon: ({ color }) => renderTabIcon("person", color) }}
      />
    </Tab.Navigator>
  );
}

