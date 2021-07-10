import React, { useState } from 'react';
import { 
  View, 
  Image, 
  TextInput,
  Button, 
  Text 
} from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/Button';
import logoLogin from '../../assets/test.png';
import { useAuth } from '../../hooks/auth';

import { useForm, Controller } from "react-hook-form";


export function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  const { signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    }catch (error) {
      console.log(error);
    }
  }

  return (
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
          />
        )}
        name="firstName"
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}

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
          />
        )}
        name="lastName"
        defaultValue=""
      />

      <CustomButton title="Submit" onPress={handleSubmit(onSubmit)} />

    </View>
  );
}


