import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';

import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/auth';

export function Routes(){
  const { userInfo } = useAuth();
  return(
    <NavigationContainer>
      {userInfo.id ? 
      <Image 
        source={{ uri: userInfo.photoUrl}}
        style={{ width: 49,
          height: 49,
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center'}}
      /> 
      : <AppRoutes />}
    </NavigationContainer>
  )
}