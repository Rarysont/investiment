import React, { useState } from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Text, View, TextInput } from 'react-native';

import styles from './styles.less';
import { Background } from '../../../components/background';

export function SearchTicketHeader(){
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  function handleGoBack(){
    navigation.goBack();
  }

  function handleChangeTicket(value) {
    setSearch(value)
  }

  return (
    <Background>
      <View
        style={[styles.container, { borderBottomWidth: 2, borderColor: '#000000'}]}
      >
        <View style={styles.box}>
          <BorderlessButton onPress={handleGoBack} style={styles.goBack}>
            <Feather
              name="arrow-left"
              size={24}
              color="#000"
            />
          </BorderlessButton>

          <View style={styles.containerSearch}>
            <TextInput
              placeholder="Pesquise pelos ativos"
              placeholderTextColor="#666460"
              onChangeText={(text) => handleChangeTicket(text)}
              // onBlur={() => setIsFocused(false)}
              // onFocus={() => setIsFocused(true)}
              value={search}
              style={styles.textArea}
            />
          </View>
        </View>
      </View>
    </Background>
  );
}
