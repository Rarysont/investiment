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

import Login from '../../assets/login.png';
import { useAuth } from '../../hooks/auth';

import { CustomButton } from '../../components/Button';
import { Background } from '../../components/background';
import { ButtonIconGoogle } from '../../components/ButtonGoogle';
import { ButtonIconFacebook } from '../../components/ButtonFacebook';


export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  const { signInGoogle, signInFacebook } = useAuth();

  const navigation = useNavigation();

  async function handleSignInGoogle() {
    try {
      await signInGoogle();
    }catch (error) {
      console.log(error);
    }
  }

  function handleSignIn() {
    navigation.navigate('SignIn');
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
        <Text style={styles.textHeader}>Crie a sua conta</Text>
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
              placeholder="Usuário"
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
              placeholder="Digite a senha"
              placeholderTextColor="#000" 
              secureTextEntry={true} 
            />
          )}
          name="password"
        />

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
              placeholder="Digite novamente a senha"
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
              onPress={handleSignIn}
            >
              <Text style={styles.btnSignUpTitle}>
                Já tem uma conta? Faça login
              </Text>
            </RectButton>
          <Text style={styles.textEntry}>Ou cadastre-se com</Text>
        </View>

        <View style={styles.auth}>
          <ButtonIconGoogle  title="Cadastrar com Google" onPress={handleSignInGoogle} />
        </View>

        <ButtonIconFacebook title="Cadastrar com Facebook" onPress={handleSignInFacebook} />
      </View>
    </Background>
  );
}


