import React from 'react';
import { Text, View } from 'react-native';
import { Background } from '../../components/background';

import styles from './styles';

export function Profile(){
  return(
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Tela carteira</Text>
      </View>
    </Background>
  );
}