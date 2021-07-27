import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import styles from './styles';
import Icon from '@expo/vector-icons/EvilIcons';

export function ButtonPerfil({ text, title, ...rest }){
  return(
    <>
      {text ? <Text style={styles.textButtons}>{text}</Text> : ''}
      <RectButton 
        style={styles.container}
        { ...rest}
      >
        <View style={styles.box}>
          <Text style={styles.title}>
            {title ? title : 'Não cadastrado'}
          </Text>
           <Icon name="chevron-right" size={32} color="#FFF" />
        </View>
      </RectButton>
    </>
  );
}
