import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export function Input({ 
  placeHolder, 
  value,
  change,
   ...rest
}) {
  const { primary } = theme.colors;
  return (
    <TextInput
      value={value}
      style={styles.username}
      placeholder={placeHolder}
      placeholderTextColor={primary}
      {...rest}
    />
  );
}