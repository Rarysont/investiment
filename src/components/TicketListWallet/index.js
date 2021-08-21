import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, Image } from 'react-native';

import styles from './styles.less';

export function TicketListWallet({
  title,
  img,
  price,
  quantity,
  ...rest
}){
  const uri = 'https://logodownload.org/wp-content/uploads/2019/09/magalu-logo-0.png';

  return(
    <RectButton {...rest} onPress={() => console.log(title)}>
      <LinearGradient
        style={styles.container}
        colors={['#FFF', '#FFF']}
      >
        <View style={styles.containerImage}>
          {img ? <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover"
          /> : <Text style={styles.image}>Oi</Text>}
        </View>

        <Text style={styles.title}>
          { title }
        </Text>
      </LinearGradient>
    </RectButton>
  );
}
