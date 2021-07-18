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

const { APP_ID } = process.env;
const { GOOGLE_ANDROID_CLIENT_ID } = process.env;
const { GOOGLE_IOS_CLIENT_ID } = process.env;


function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  async function signInGoogle() {
    try {
      setLoading(true);

      const { type, accessToken, user } = await Google.logInAsync({
        androidClientId: GOOGLE_ANDROID_CLIENT_ID,
        iosClientId: GOOGLE_IOS_CLIENT_ID,
        scopes: ['profile', 'email'],
      });

      if (type === "success") {
        setToken(accessToken);
        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(user));
        console.log(user);
        setUserInfo({
          id: user.id,
          email: user.email,
          name: user.name,
          picture: user.photoUrl,
          token: accessToken,
        });
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
        appId: APP_ID,
      });
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });

      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = 
        await fetch(`https://graph.facebook.com/me?fields=id,name,picture.type(large),email&access_token=${token}`);
        const data = await response.json();

        setUserInfo({
          id: data.id,
          email: data.email,
          name: data.name,
          picture: data.picture.data.url,
          token,
        });
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