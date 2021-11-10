import React, { useEffect, useState } from 'react';
import { Text, Image, View, TextInput } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { RectButton } from 'react-native-gesture-handler';
import { Header } from '../../../components/Header';
import styles from './styles.less';
import { Background } from '../../../components/background';
import { acoes } from '../../../utils/acoes';
import { maskDate } from '../../../utils/masks';

export function SearchTicketHeader(){
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [selected, setSelected] = useState("");
  const [isFocused, setIsFocused] = useState(false)

  function setSelectedValue(item) {
    setSelected(item)
  }

  useEffect(() => {
    if(!selected) {
      setSelected(0)
    }
  }, [])

  return (
    <Background>
      <Header title="Cadastro de Ativos" />
      <View
        style={styles.container}
      >
        <View style={styles.containerImage}>
          <Image
            source={{ uri: acoes[2].image}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.box}>
        <View style={styles.containerDate}>
            <Text style={styles.textInputs}>Operação</Text>
            <Controller
              name="Username"
              control={control}
              rules={{
                required: {
                  message:  'Campo obrigatório',
                  value: true,
                }
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input,
                    {
                      color: `${isFocused ? '#32BD50' : '#B9B9C0'}`
                    }]}
                  onBlur={() => setIsFocused(false)}
                  onFocus={() => setIsFocused(true)}
                  onChangeText={onChange}
                  value={maskDate(value)}
                  keyboardType = 'numeric'
                  placeholder="Compra | Venda"
                  placeholderTextColor={`${isFocused ? '#32BD50' : '#B9B9C0'}`}
                />
              )}
              name="userName"
            />
          </View>
          <View style={styles.containerDate}>
            <Text style={styles.textInputs}>Data da compra</Text>
            <Controller
              name="Username"
              control={control}
              rules={{
                required: {
                  message:  'Campo obrigatório',
                  value: true,
                }
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input,
                    {
                      color: `${isFocused ? '#32BD50' : '#B9B9C0'}`
                    }]}
                  onBlur={() => setIsFocused(false)}
                  onFocus={() => setIsFocused(true)}
                  onChangeText={onChange}
                  value={maskDate(value)}
                  keyboardType = 'numeric'
                  placeholder="DD/MM/YYYY"
                  placeholderTextColor={`${isFocused ? '#32BD50' : '#B9B9C0'}`}
                />
              )}
              name="userName"
            />
          </View>
          <View style={styles.containerDate}>
            <Text style={styles.textInputs}>Quantidade</Text>
            <Controller
              name="Username"
              control={control}
              rules={{
                required: {
                  message:  'Campo obrigatório',
                  value: true,
                }
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input,
                    {
                      color: `${isFocused ? '#32BD50' : '#B9B9C0'}`
                    }]}
                  onBlur={() => setIsFocused(false)}
                  onFocus={() => setIsFocused(true)}
                  onChangeText={onChange}
                  value={maskDate(value)}
                  keyboardType = 'numeric'
                  placeholder="0"
                  placeholderTextColor={`${isFocused ? '#32BD50' : '#B9B9C0'}`}
                />
              )}
              name="userName"
            />
          </View>

          <View style={styles.containerDate}>
            <Text style={styles.textInputs}>Preço</Text>
            <Controller
              name="Username"
              control={control}
              rules={{
                required: {
                  message:  'Campo obrigatório',
                  value: true,
                }
              }}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  style={[styles.input,
                    {
                      color: `${isFocused ? '#32BD50' : '#B9B9C0'}`
                    }]}
                  onBlur={() => setIsFocused(false)}
                  onFocus={() => setIsFocused(true)}
                  onChangeText={onChange}
                  value={maskDate(value)}
                  keyboardType = 'numeric'
                  placeholder="R$ 00,00"
                  placeholderTextColor={`${isFocused ? '#32BD50' : '#B9B9C0'}`}
                />
              )}
              name="userName"
            />
          </View>

          <View style={styles.logoutContainer}>
          <RectButton style={styles.logoutButton}>
            <Text style={styles.titleButton}>
              ENVIAR
            </Text>
          </RectButton>
          </View>
        </View>
      </View>
    </Background>
  );
}
