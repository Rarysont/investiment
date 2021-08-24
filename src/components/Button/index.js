import React from 'react';
import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles.less';

export function CustomButton({ title, ...rest }) {
  return (
    <RectButton style={[styles.container, { backgroundColor: '#E51C44' }]} {...rest}>
      <Text style={[styles.title, { color: '#FFF' }]}>{title}</Text>
    </RectButton>
  );
}
