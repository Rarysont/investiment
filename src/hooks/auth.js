import React,
{
  createContext,
  useContext,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-google-app-auth';

import { COLLECTION_USERS } from '../../configs/database';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userInfo, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');

  async function signIn() {
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

  return (
    <AuthContext.Provider value={{
      userInfo,
      signIn,
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