import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import FacebookIcon from '@expo/vector-icons/FontAwesome';

import styles from './styles';

export function ButtonIconFacebook({ title, ...rest }){
  return(
    <RectButton 
      style={styles.container} 
      {...rest }
    >
      <View style={styles.iconWrapper}>
        <FacebookIcon name="facebook" size={32} color="#0A1033" />
      </View>

      <Text style={styles.title}>
        { title }
      </Text>
    </RectButton>
  );
}