import * as React from 'react';
import { Text, View, TouchableOpacity  } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Background } from '../background';

import { MyList } from '../../screens/MyList';
import { Profile } from '../../screens/Profile';
import { Wallet } from '../../screens/Wallet';

import styles from './styles.less';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={styles.tabNavigation}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Background key={index}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginbottom: 3
              }}
            >
              <Icon name={options.tabBarLabel} size={20} color={isFocused ? '#1CC0A0' : '#FFF'} />
              <Text style={{
                color: isFocused ? '#1CC0A0' : '#FFF',
                fontFamily: 'Inter_500Medium',
                fontSize: 12,
                textAlign: 'center',
                }}>
                {route.name}
              </Text>
            </TouchableOpacity>
          </Background>
        );
      })}
    </View>
  );
}

export function TabsNavigation(){
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name="Minha Lista"
        component={MyList}
        options={{
          tabBarLabel: 'th-list'
        }}
      />

      <Tab.Screen
        name="Carteira"
        component={Wallet}
        options={{
          tabBarLabel: 'wallet'
         }}
      />

      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarLabel: 'user'
        }}
      />
    </Tab.Navigator>
  );
}

