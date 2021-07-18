import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';
import { useAuth } from '../hooks/auth';

export function Routes(){
  const { userInfo } = useAuth();
  return(
    <NavigationContainer>
      {userInfo.id ? 
        <AuthRoutes />
      : <AppRoutes />}
    </NavigationContainer>
  )
}