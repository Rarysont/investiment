import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';

import styles from './styles.less';

export function Header({ title, action} ){
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return (
    <View
      style={[styles.container, { borderBottomWidth: 2, borderColor: 'black'}]}
    >
      <BorderlessButton onPress={handleGoBack}>
        <Feather
          name="arrow-left"
          size={24}
          color="#000"
        />
      </BorderlessButton>

      <Text style={styles.title}>
        { title }
      </Text>

      {
        action
        ?
        <View>
          { action }
        </View>
        :
        <View style={{ width: 24 }}/>
      }
    </View>
  );
}
