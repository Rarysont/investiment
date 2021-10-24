import React from 'react';
import styles from './styles.less';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export function Searched (tickets) {
  console.log(tickets, "ticket")
  return (
    <RectButton style={styles.buttonTickets} key={tickets.id}>
      <View style={[styles.boxTickets, { borderBottomWidth: 2, borderColor: "#9E9EAC" }]}>
        <View style={styles.propertyTicket}>
          <Text style={styles.titleTicket}>{tickets.code}</Text>
          <Text style={styles.subTitleTicket}>{tickets.companyName}</Text>
        </View>
        <View style={styles.checkBox}>
          {tickets.active === true ? <Icon name="check-box" size={30} color="#32BD50" /> : <Icon name="check-box-outline-blank" size={30} color="#000000" />}
        </View>
      </View>
    </RectButton>
  )
}
