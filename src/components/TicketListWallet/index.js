import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, Text, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles.less';

export function TicketListWallet({
  title,
  price,
  quantity,
  abr,
  percent,
  image,
  ...rest
}){
  // const uri = 'https://seeklogo.com/images/B/bradesco-com-degrade-logo-D276931A0A-seeklogo.com.png';
  // const uri = 'https://logodownload.org/wp-content/uploads/2019/09/magalu-logo-0.png';
  const uri = 'https://i.pinimg.com/originals/9b/73/bd/9b73bd6461829fa63c4c366ffd2f19cf.png';

  const navigation = useNavigation();

  function handleEditProfile() {
    navigation.navigate('Graphic', { coupon: 'oi'});
  }

  return(
      <RectButton {...rest} onPress={handleEditProfile}>
        <View style={[styles.container, {
          borderWidth: 3 ,
          borderColor: '#ccc'
        }]}>
          <View style={styles.containerData}>
            <View style={styles.containerImage}>
              <Image
                source={{ uri: image }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            <View style={styles.containerNameAction}>
              <Text style={styles.nameTicket}>
                { title }
              </Text>
              <Text style={[styles.nameTicket, { color: '#32BD50'}]}>
                { abr }
              </Text>
            </View>

            <View style={styles.bar}></View>

            <View style={styles.containerPrice}>
              <Text style={styles.price}>
                { price }
              </Text>
              <Text style={[styles.percent, { color: '#32BD50'}]}>
                { percent }%
              </Text>
            </View>

          </View>
        </View>
      </RectButton>
  );
}
