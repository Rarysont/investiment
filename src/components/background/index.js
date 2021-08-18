import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles.less';

export function Background({ children }) {
  return (
    <LinearGradient style={styles.container} colors={['#0A1033', '#0E1647']}>
      {children}
    </LinearGradient>
  );
}
