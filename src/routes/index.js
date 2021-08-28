import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  Image,
  View,
  ActivityIndicator
} from 'react-native';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

export function Routes(){
  const { userInfo, loading } = useAuth();

  if(loading) {
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center', flex: 1 }}
      >
        <ActivityIndicator
          color="#1CC0A0"
          style={{justifyContent: 'center', alignItems: 'center' }}
        />
      </View>
    );
  }

  return(
    <NavigationContainer>
      {userInfo.id
        ? <AuthRoutes />
        : <AppRoutes />}
    </NavigationContainer>
  )
}
