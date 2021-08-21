import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles.less';

export function Background({ isSign, children }) {
  return (
    <LinearGradient style={styles.container} colors={isSign ? ['#028090', '#028090'] : ['#FFF', '#FFF']}>
      {children}
    </LinearGradient>
  );

}
