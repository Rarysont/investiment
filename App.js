import React from 'react';
import { StatusBar, TextInput, Text } from 'react-native';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';
import { Poppins_700Bold, Poppins_400Regular, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { Roboto_400Regular, Roboto_900Black, Roboto_500Medium } from '@expo-google-fonts/roboto';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';
import { Background } from './src/components/background';
import { AuthProvider } from './src/hooks/auth';

export default function App() {
  TextInput.defaultProps = { ...(TextInput.defaultProps || {}), allowFontScaling: false };
  Text.defaultProps = { ...(Text.defaultProps || {}), allowFontScaling: false };

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
    Poppins_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Roboto_900Black,
    Roboto_400Regular,
    Roboto_500Medium,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>
  );
}
