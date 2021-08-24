import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import Icon from '@expo/vector-icons/EvilIcons';
import styles from './styles.less';

export function ButtonPerfil({ text, title, ...rest }) {
  return (
    <>
      <View style={styles.container}>
        <RectButton  style={styles.containerButton} {...rest}>
          <View style={styles.box}>
            <Icon name="chevron-right" size={32} color="#FFF" />
              <Text style={styles.title}>{title || 'Não cadastrado'}</Text>

            <View style={styles.titleBox}>
            <Icon name="chevron-right" size={32} color="#000" />
            </View>

          </View>
        </RectButton>
      </View>
    </>
  );
}
