import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
// eslint-disable-next-line import/no-duplicates
import FacebookIcon from '@expo/vector-icons/FontAwesome';
import GoogleIcon from '@expo/vector-icons/FontAwesome';

import styles from './styles.less';

export function ButtonSocial({ title, isFacebook, isLogin, ...rest }) {
  const backgroundColorLogin = isLogin ? '#000' : '#FFF'
  return (
    <RectButton style={[styles.container, { backgroundColor: isLogin ? '#FFF' : '#FFF'}]} {...rest}>
      <View style={styles.iconWrapper}>
        {isFacebook ? (
          <FacebookIcon name="facebook" size={32} color={backgroundColorLogin} />
        ) : (
          <GoogleIcon name="google" size={32} color={backgroundColorLogin} />
        )}
      </View>

      <Text style={[styles.title, { color: isLogin ? '#050b17' : '#028090'}]}>{title}</Text>
    </RectButton>
  );
}
