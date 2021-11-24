import React from 'react';
import styles from './styles.less';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { favoriteStocks } from '../../service/stock';
import { useAuth } from '../../hooks/auth';
import { useNavigation } from '@react-navigation/native';
import { useFavorite } from '../../hooks/favorite';

export function Searched ({ tickets, isWallet }) {
  const { addFavoriteTicket } = useFavorite()
  const navigation = useNavigation()

  async function handleSubmitFavoritTicket(value) {
    if(!isWallet) {
      try {
        const res = await addFavoriteTicket(value)

        if(res.toLowerCase() === 'success') {
          navigation.navigate('Minha Lista');
        }
      } catch(error) {
        console.log(error.response, "error")
      }
    } else {
      navigation.navigate('SearchTicketHeader', { id: tickets.id, img: tickets.companyLogo64, companyName: tickets.companyName });
    }
  }

  return (
    <RectButton style={styles.buttonTickets} key={tickets.id} onPress={() => handleSubmitFavoritTicket(tickets)}>
      <View style={[styles.boxTickets, { borderBottomWidth: 2, borderColor: "#9E9EAC" }]}>
        <View style={styles.propertyTicket}>
          <Text style={styles.titleTicket}>{tickets.code}</Text>
          <Text style={styles.subTitleTicket}>{tickets.companyName}</Text>
        </View>
      </View>
    </RectButton>
  )
}
