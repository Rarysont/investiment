import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text } from 'react-native';

import styles from './styles.less';

export function TicketListWallet({
  title,
  ...rest
}){
  return(
    <RectButton {...rest} onPress={() => console.log(title)}>
      <LinearGradient
        style={styles.container}
        colors={['#243189', '#1B2565']}
      >
        <Text style={styles.title}>
          { title }
        </Text>
      </LinearGradient>
    </RectButton>
  );
}