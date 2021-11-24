import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { maskBRL } from '../../utils/masks';
import styles from './styles.less';

export function TicketListWallet({
  id,
  title,
  price,
  quantity,
  abr,
  percent,
  image,
  lastPrice,
  total,
  ...rest
}){
  const navigation = useNavigation();

  function handleEditProfile() {
    navigation.navigate('Graphic', { idTicket: id });
  }

  return(
      <RectButton {...rest} onPress={handleEditProfile}>
        <View style={[styles.container, {
          borderBottomWidth: 1,
        }]}>
          <View style={styles.containerWallet}>
            <View style={styles.containerData}>
              <Image
                source={{ uri: `data:image/png;base64,${image}` }}
                style={styles.image}
                resizeMode="cover"
              />
              <Text style={styles.abr}>{abr}</Text>
            </View>
            <View style={styles.containerData}>
              <Text style={styles.quantity}>{quantity}</Text>
            </View>
            <View style={styles.containerData}>
              <Text style={styles.price}>{maskBRL(price)}</Text>
              <Text style={styles.lastPrice}>{maskBRL(lastPrice)}</Text>
            </View>
            <View style={styles.containerData}>
              <Text style={styles.nameTicket}>{maskBRL(total)}</Text>
              <Text style={[styles.percent, {
                color: `${String(percent)?.includes('-') ? "#E51C44" : "#32BD50"}`
              }]}>{String(percent)?.includes('-') ? `${maskBRL(percent)}%` : `+${maskBRL(percent)}%`}</Text>
            </View>
          </View>
        </View>
      </RectButton>
  );
}
