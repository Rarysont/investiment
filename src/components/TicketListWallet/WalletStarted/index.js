import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.less';

export function WalletStarted() {
  const navigation = useNavigation();

  function handleEditProfile() {
    navigation.navigate('SearchTicketHeader');
  }

  return(
    <View style={styles.container}>
      <View style={styles.boxMessage}>
        <Text style={styles.messageWelcome}>
          Vimos que você ainda não cadastrou seus ativos, clique aqui e cadastre!
        </Text>
      </View>
      <View style={styles.containerButton}>
        <RectButton style={styles.buttonRegister} onPress={handleEditProfile}>
          <Text style={styles.messageButton}>Cadastrar</Text>
        </RectButton>
      </View>
    </View>
  );
}
