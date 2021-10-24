import React from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  ScrollView,
  Alert,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles.less';

import Login from '../../assets/2login.png';
import { useAuth } from '../../hooks/auth';
import { CustomButton } from '../../components/Button';
import { Background } from '../../components/background';
import { ButtonSocial } from '../../components/ButtonSocial';

export function SignIn() {
  const navigation = useNavigation();
  const { signInGoogle, signInFacebook, login } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data) {
    await login(data)
  }

  async function handleSignIn() {
    try {
      await signInGoogle();
    } catch (error) {
      if (error) {
        Alert.alert("Erro ao tentar login com Google", "Tente novamente", [
          {
            text: "Ok"
          }
        ])
      }
    }
  }

  function handleSignUp() {
    navigation.navigate('SignUp');
  }

  async function handleSignInFacebook() {
    try {
      await signInFacebook();
    } catch (error) {
      if (error) {
        Alert.alert("Erro ao tentar login com Faccebook", "Tente novamente", [
          {
            text: "Ok"
          }
        ])
      }
    }
  }

  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={Login}
            style={styles.image}
          />

          <Controller
            name="Username"
            control={control}
            rules={{
              required: {
                message:  'Campo obrigatório',
                value: true,
              }
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
            name="userName"
          />

          {errors.userName && <Text style={styles.errors}>{errors.userName.message}</Text>}

          <Controller
            name="Password"
            control={control}
            rules={{
              required: {
                message:  'Campo obrigatório',
                value: true,
              }
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

          {errors.password && <Text style={styles.errors}>{errors.password.message}</Text>}

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

          <View style={[styles.auth, { borderWidth: 3, borderColor: '#000', borderRadius: 8 }]}>
            <ButtonSocial
              title="Entrar com Google"
              isLogin={true}
              onPress={handleSignIn}
            />
          </View>

          <View style={[styles.auth, { borderWidth: 3, borderColor: '#000', borderRadius: 8 }]}>
            <ButtonSocial
              title="Entrar com Facebook"
              onPress={handleSignInFacebook}
              isLogin={true}
              isFacebook={true}
            />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}


