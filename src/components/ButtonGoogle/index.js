import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import GoogleIcon from '@expo/vector-icons/FontAwesome';

import styles from './styles';

export function ButtonIconGoogle({ title, ...rest }){
  return(
    <RectButton 
      style={styles.container} 
      {...rest }
    >
      <View style={styles.iconWrapper}>
        <GoogleIcon name="google" size={32} color="#0A1033" />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}