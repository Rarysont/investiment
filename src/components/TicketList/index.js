import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export function TicketList(data){
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.namesTickets}>
          <Text style={styles.containerActions}>{data.data.abr}</Text>
          <Text style={styles.containerActions}>{data.data.name}</Text>
        </View>
        <Text style={styles.containerActions}>{data.data.value}</Text>
      </View>
    </View>
  );
}