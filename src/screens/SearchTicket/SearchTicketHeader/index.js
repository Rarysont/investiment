import React, { useEffect, useState } from 'react';
import { Text, Image, View, TextInput } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { RectButton } from 'react-native-gesture-handler';
import { Header } from '../../../components/Header';
import styles from './styles.less';
import { useAuth } from '../../../hooks/auth';
import { Background } from '../../../components/background';
import { maskDate } from '../../../utils/masks';
import { addOrRemoveWallet } from '../../../service/wallet';

export function SearchTicketHeader({ route }){
  const { id, img, companyName } = route.params;
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [selected, setSelected] = useState();
  const [isFocused, setIsFocused] = useState(false)
  const { userInfo } = useAuth();

  function handleOperationSelected(value) {
    setSelected(value)
  }

  async function onSubmit(data) {
    try {
      const date = data.date.split("/").join("-").split("-");
      const finalDate = `${date[2]}-${date[1]}-${date[0]}`;

      const params = {
        idTicket: id,
        amount: data.qtd,
        purchase: selected === "Compra" ? true : false,
        operationDate: finalDate,
        price: data.price,
        userToken: userInfo.token,
      }

      await addOrRemoveWallet(params);
    } catch(error) {
      console.log(error.response);
    }
  }

  return (
    <Background>
      <Header title="Cadastro de Ativos" />
      <View
        style={styles.container}
      >
        <View style={styles.containerImage}>
          <Image
            source={{ uri: `data:image/png;base64,${img}`}}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.TitleCompany}>{companyName}</Text>
        </View>

        <View style={styles.box}>
          <View style={styles.containerOperation}>
            <Text style={styles.textInputs}>Operação</Text>
            <RectButton style={[styles.buttonBuyOrSell, {
              backgroundColor: `${selected === "Compra" ? "#32BD50" : "#000"}`
              }]} onPress={() => handleOperationSelected("Compra")}>
              <Text style={styles.titleButton}>
                Compra
              </Text>
            </RectButton>
            <RectButton style={[styles.buttonBuyOrSell2, {
              backgroundColor: `${selected === "Venda" ? "#32BD50" : "#000"}`
              }]} onPress={() => handleOperationSelected("Venda")}>
              <Text style={styles.titleButton}>
                Venda
              </Text>
            </RectButton>
          </View>

          <View style={styles.containerDate}>
            <Text style={styles.textInputs}>Data da compra</Text>
            <Controller
              name="date"
              control={control}
              rules={{
                required: {
                  message:  'Campo obrigatório',
                  value: true,
                },
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
                  maxLength={10}
                  placeholderTextColor={`${isFocused ? '#32BD50' : '#B9B9C0'}`}
                />
              )}
              name="date"
            />
          </View>
          <View style={styles.containerDate}>
            <Text style={styles.textInputs}>Quantidade</Text>
            <Controller
              name="qtd"
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
                  value={value}
                  keyboardType = 'numeric'
                  placeholder="0"
                  placeholderTextColor={`${isFocused ? '#32BD50' : '#B9B9C0'}`}
                />
              )}
              name="qtd"
            />
          </View>

          <View style={styles.containerDate}>
            <Text style={styles.textInputs}>Preço</Text>
            <Controller
              name="price"
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
                  value={value}
                  keyboardType = 'numeric'
                  placeholder="R$ 00,00"
                  placeholderTextColor={`${isFocused ? '#32BD50' : '#B9B9C0'}`}
                />
              )}
              name="price"
            />
          </View>

          <View style={styles.logoutContainer}>
          <RectButton style={styles.logoutButton} onPress={handleSubmit(onSubmit)}>
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
