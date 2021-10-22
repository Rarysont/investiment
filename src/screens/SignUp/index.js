import React from 'react';
import {
  View,
  TextInput,
  Text,
  Alert,
  ScrollView,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles.less';

import { maskTEL, unmaskTEL, maskEMAIL } from '../../utils/masks';
import { useAuth } from '../../hooks/auth';
import { register } from '../../service/register';
import { CustomButton } from '../../components/Button';
import { Background } from '../../components/background';
import { ButtonSocial } from '../../components/ButtonSocial';

export function SignUp() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const { signInGoogle, signInFacebook } = useAuth();

  const navigation = useNavigation();

  async function onSubmit(data) {
    try {
      const submit = {
        fullName: data.fullName,
        email: data.email,
        phone: unmaskTEL(data.phone),
        userName: data.userName,
        password: data.password
      }

      const response = await register(submit);
      const message = JSON.parse(response)
      if(message?.Success) {
        navigation.navigate('SignIn')
      }
    } catch(error) {
      const err = JSON.parse(error.response.data)
      if (error) {
        Alert.alert("Erro ao tentar cadastrar conta", err.Errors[0], [
          {
            text: "Ok"
          }
        ])
      }
    }
  }

  async function handleSignInGoogle() {
    await signInGoogle();
  }

  function handleSignIn() {
    navigation.navigate('SignIn');
  }

  async function handleSignInFacebook() {
    await signInFacebook();
  }

  return (
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.textHeader}>Crie a sua conta</Text>
          <Controller
            control={control}
            rules={{
              minLength: {
                message: 'Quantidade de caracteres inválida. Mínimo: 10 caracteres',
                value: 10,
              },
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
                placeholder="Nome Completo"
                placeholderTextColor="#000"
              />
            )}
            name="fullName"
          />

          {errors.fullName && <Text style={styles.errors}>{errors.fullName.message}</Text>}

          <Controller
            control={control}
            rules={{
              minLength: {
                message: 'Quantidade de caracteres inválida. Mínimo: 7 caracteres',
                value: 7,
              },
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
                value={maskEMAIL(value)}
                placeholder="E-mail"
                placeholderTextColor="#000"
              />
            )}
            name="email"
          />
          {errors.email && <Text style={styles.errors}>{errors.email.message}</Text>}

          <Controller
            control={control}
            rules={{
              minLength: {
                message: 'Quantidade de caracteres inválida. Mínimo: 15 caracteres',
                value: 15,
              },
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
                keyboardType = 'numeric'
                value={maskTEL(value)}
                maxLength={15}
                placeholder="Telefone"
                placeholderTextColor="#000"
              />
            )}
            name="phone"
          />

          {errors.phone && <Text style={styles.errors}>{errors.phone.message}</Text>}

          <Controller
            control={control}
            rules={{
              minLength: {
                message: 'Quantidade de caracteres inválida, Mínimo: 3 caracteres',
                value: 3,
              },
              required: {
                message:  'Campo obrigatório',
                value: true,
              },
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
            name="userName"
          />

          {errors.userName && <Text style={styles.errors}>{errors.userName.message}</Text>}

          <Controller
            control={control}
            rules={{
              minLength: {
                message: 'Quantidade de caracteres inválida, Mínimo: 8 caracteres',
                value: 8,
              },
              required: {
                message:  'Campo obrigatório',
                value: true,
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                maxLength={15}
                placeholder="Digite a senha"
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
              onPress={handleSignIn}
            >
              <Text style={styles.btnSignUpTitle}>
                Já tem uma conta? Faça login
              </Text>
            </RectButton>
            <Text style={styles.textEntry}>Ou cadastre-se com</Text>
          </View>

          <View style={[styles.auth, {
            borderWidth: 3,
            borderColor: '#000',
            borderRadius: 8
          }]}>
            <ButtonSocial
              title="Cadastrar com Google"
              onPress={handleSignInGoogle}
            />
          </View>

          <View style={[styles.auth, {
            borderWidth: 3,
            borderColor: '#000',
            borderRadius: 8
          }]}>
            <ButtonSocial
              title="Cadastrar com Facebook"
              onPress={handleSignInFacebook}
              isFacebook={true}
            />
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}


