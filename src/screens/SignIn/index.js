import React from 'react';
import { 
  View, 
  Image, 
  TextInput,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles.less';

import Login from '../../assets/2login.png';
import { useAuth } from '../../hooks/auth';

import { CustomButton } from '../../components/Button';
import { Background } from '../../components/background';
import { ButtonIconGoogle } from '../../components/ButtonGoogle';
import { ButtonIconFacebook } from '../../components/ButtonFacebook';


export function SignIn() {
  const navigation = useNavigation();
  const { signInGoogle, signInFacebook } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  async function handleSignIn() {
    try {
      await signInGoogle();
    }catch (error) {
      console.log(error);
    }
  }

  function handleSignUp() {
    navigation.navigate('SignUp');
  } 

  async function handleSignInFacebook() {
    try {
      await signInFacebook();
    }catch (error) {
      console.log(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image 
          source={Login}
          style={styles.image}
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Username"
              placeholderTextColor="#000"
            />
          )}
          name="username"
        />
        {errors.username && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
          maxLength: 100,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Password"
              placeholderTextColor="#000" 
              secureTextEntry={true} 
            />
          )}
          name="password"
        />

        <CustomButton title="Entrar" onPress={handleSubmit(onSubmit)} />
        <View style={styles.signUp}>
            <RectButton 
              style={styles.btnSignUp}
              onPress={handleSignUp}
            >
              <Text style={styles.btnSignUpTitle}>
                Ainda não tem conta? Cadastre-se
              </Text>
            </RectButton>
          <Text style={styles.textEntry}>Ou</Text>
        </View>

        <View style={styles.auth}>
          <ButtonIconGoogle 
            title="Entrar com Google" 
            onPress={handleSignIn} 
          />
        </View>

        <ButtonIconFacebook 
          title="Entrar com Facebook" 
          onPress={handleSignInFacebook} 
        />
      </View>
    </Background>
  );
}


