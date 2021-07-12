import React from 'react';
import { 
  View, 
  Image, 
  TextInput,
  Text 
} from 'react-native';
import styles from './styles.less';
import { CustomButton } from '../../components/Button';
import logoLogin from '../../assets/test.png';
import { useAuth } from '../../hooks/auth';

import { useForm, Controller } from "react-hook-form";
import { Background } from '../../components/background';
import { ButtonIconGoogle } from '../../components/ButtonGoogle';
import { ButtonIconFacebook } from '../../components/ButtonFacebook';


export function SignIn() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  const { signInGoogle, signInFacebook } = useAuth();

  async function handleSignIn() {
    try {
      await signInGoogle();
    }catch (error) {
      console.log(error);
    }
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
          source={logoLogin}
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
          <Text style={styles.textEntry}>Ainda não tem conta? Cadastre-se</Text>
          <Text style={styles.textEntry}>Ou entre com</Text>
        </View>

        <View style={styles.auth}>
          <ButtonIconGoogle  title="Entrar com Google" onPress={handleSignIn} />
        </View>

        <ButtonIconFacebook title="Entrar com Facebook" onPress={handleSignInFacebook} />
      </View>
    </Background>
  );
}


