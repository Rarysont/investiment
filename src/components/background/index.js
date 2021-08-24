import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles.less';

export function Background({ children }) {
  return (
    <LinearGradient style={styles.container} colors={['#FFF', '#FFF']}>
      {children}
    </LinearGradient>
  );

}
