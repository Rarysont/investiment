import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
// eslint-disable-next-line import/no-duplicates
import FacebookIcon from '@expo/vector-icons/FontAwesome';
import GoogleIcon from '@expo/vector-icons/FontAwesome';

import styles from './styles.less';

export function ButtonSocial({ title, isFacebook, ...rest }) {
  return (
    <RectButton style={[styles.container, { backgroundColor: '#FFF'}]} {...rest}>
      <View style={styles.iconWrapper}>
        {isFacebook ? (
          <FacebookIcon name="facebook" size={32} color="#000" />
        ) : (
          <GoogleIcon name="google" size={32} color="#000" />
        )}
      </View>

      <Text style={[styles.title, { color: '#050b17'}]}>{title}</Text>
    </RectButton>
  );
}
