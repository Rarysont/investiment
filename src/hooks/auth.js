import React,
{
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

import { Alert } from 'react-native';

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
        const userData = {
          id: user.id,
          email: user.email,
          name: user.name,
          picture: user.photoUrl,
          token: accessToken,
        };
        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));
        setUserInfo(userData);
      }
    } catch (error) {
      if (error) {
        Alert.alert("Erro ao tentar login com Google", "Tente novamente", [
          {
            text: "Ok"
          }
        ])
      }
    } finally {
      setLoading(false);
    }
  }

  async function singOut() {
    setUserInfo({});
    await AsyncStorage.removeItem(COLLECTION_USERS);
  }

  async function signInFacebook() {
    try {
      setLoading(true);
      await Facebook.initializeAsync({
        appId: '496078595025593',
      });
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });

      if (type === 'success') {
        const response =
        await fetch(`https://graph.facebook.com/me?fields=id,name,picture.width(480).height(480),email&access_token=${token}`);
        const data = await response.json();
        const userData = {
          id: data.id,
          email: data.email,
          name: data.name,
          picture: data.picture.data.url,
          token,
        };

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));

        setUserInfo({
          id: data.id,
          email: data.email,
          name: data.name,
          picture: data.picture.data.url,
          token,
        });
      }
    } catch (error){
      if (error) {
        Alert.alert("Erro ao tentar login com Facebook", "Tente novamente", [
          {
            text: "Ok"
          }
        ])
      }
    } finally {
      setLoading(false);
    }
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);
    if (storage) {
      const userLogged = JSON.parse(storage);
      setUserInfo(userLogged);
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{
      userInfo,
      signInGoogle,
      signInFacebook,
      loading,
      token,
      singOut,
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
