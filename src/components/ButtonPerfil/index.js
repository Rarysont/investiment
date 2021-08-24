import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/EvilIcons';
import FirstIcons from '@expo/vector-icons/Ionicons'
import styles from './styles.less';

export function ButtonPerfil({ text, title, icone, ...rest }) {
  return (
    <>
      <View style={styles.container}>
        <RectButton  style={styles.button} {...rest}>
          <View style={styles.boxIcons}>
            <FirstIcons name={icone} size={20} color="#000" />

            <View style={styles.boxTextIcon}>
              <Text style={styles.titleButton}>{title || 'Não cadastrado'}</Text>
              <Icon name="chevron-right" size={32} color="#000" />
            </View>
          </View>
        </RectButton>
      </View>
    </>
  );
}
