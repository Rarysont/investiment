import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles.less';

export function CustomButton({ title, isLogin, ...rest }) {
  return (
    <RectButton style={[styles.container, { backgroundColor: isLogin ? '#028090' : '#F0F3BD'}]} {...rest}>
      <Text style={[styles.title, { color: isLogin ? '#FFF' : '#000' }]}>{title}</Text>
    </RectButton>
  );
}
