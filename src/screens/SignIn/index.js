import React, { useState } from 'react';
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
import { Entypo } from '@expo/vector-icons';

import styles from './styles.less';

import Login from '../../assets/logo-bg.png';
import { useAuth } from '../../hooks/auth';
import { CustomButton } from '../../components/Button';
import { Background } from '../../components/background';

export function SignIn() {
  const navigation = useNavigation();
  const [eye, setEye] = useState(true);
  const { login } = useAuth();
  const { control, handleSubmit, formState: { errors } } = useForm();

  async function onSubmit(data) {
    await login(data)
  }

  // async function handleSignIn() {
  //   try {
  //     await signInGoogle();
  //   } catch (error) {
  //     if (error) {
  //       Alert.alert("Erro ao tentar login com Google", "Tente novamente", [
  //         {
  //           text: "Ok"
  //         }
  //       ])
  //     }
  //   }
  // }

  function handleSignUp() {
    navigation.navigate('SignUp');
  }

  // async function handleSignInFacebook() {
  //   try {
  //     await signInFacebook();
  //   } catch (error) {
  //     if (error) {
  //       Alert.alert("Erro ao tentar login com Faccebook", "Tente novamente", [
  //         {
  //           text: "Ok"
  //         }
  //       ])
  //     }
  //   }
  // }

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

          <View style={styles.containerEyes}>
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
                  style={styles.inputPassword}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Password"
                  placeholderTextColor="#000"
                  secureTextEntry={eye}
                />
              )}
              name="password"
            />

            <RectButton onPress={() => setEye(eye ? false : true)}>
              <Entypo name={eye ? "eye-with-line" : "eye"} size={25} color="#000" />
            </RectButton>
          </View>

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
            {/* <Text style={styles.textEntry}>Ou</Text> */}
          </View>

          {/* <View style={[styles.auth, { borderWidth: 3, borderColor: '#000', borderRadius: 8 }]}>
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
          </View> */}
        </View>
      </ScrollView>
    </Background>
  );
}


