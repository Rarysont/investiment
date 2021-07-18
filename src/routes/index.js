import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image, View } from 'react-native';

import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/auth';

export function Routes(){
  const { userInfo } = useAuth();
  return(
    <NavigationContainer>
      {userInfo.id ? 
      <>
      <View 
        style={{ 
          alignItems: 'center',
        }}>
        <Image 
        source={{ uri: userInfo.picture.data.url}}
        style={{ width: 49,
          display: 'flex',
          height: 49,
          borderRadius: 8,
        }}
      /> 
      </View>
      </>
      : <AppRoutes />}
    </NavigationContainer>
  )
}