import React from 'react';
import { Text, View } from 'react-native';
import { Background } from '../../components/background';

import styles from './styles';

export function MyList(){
  return(
    <Background>
      <View style={styles.container}>
        <Text style={styles.text}>Tela lista</Text>
      </View>
    </Background>
  );
}