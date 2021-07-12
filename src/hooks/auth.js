import React,
{
  createContext,
  useContext,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';

import { COLLECTION_USERS } from '../../configs/database';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userInfo, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  async function signInGoogle() {
    try {
      setLoading(true);

      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId: '150568413679-lu41k6lt5olatro2j062boosuocrhv4g.apps.googleusercontent.com',
        iosClientId: '150568413679-dain7elk9usf2id377v94gh6diotjo3j.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (type === "success") {
        setToken(accessToken);
        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(user));
        setUser(user);
      }
    } catch {
      throw new Error('Não foi possível autenticar');
    } finally {
      setLoading(false);
    }
  }

  async function signInFacebook() {
    try {
      setLoading(true);

      await Facebook.initializeAsync({
        appId: 496078595025593,
      });
      const {
        type,
        token,
        expirationDate,
        permissions,
        declinedPermissions,
        userId,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile'],
      });

      console.log(userId);
      console.log(token);
      console.log(type);
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        console.log(response);
      }
    } catch ({message}){
      console.log(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{
      userInfo,
      signInGoogle,
      signInFacebook,
      loading,
      token,
    }}>
      {children}
    </AuthContext.Provider>
  ) 
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export {
  AuthProvider,
  useAuth
}