import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export function TicketList({ data }){
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.boxLogo}>
          <View style={styles.logo}></View>
        </View>
        <View style={styles.namesTickets}>
          <Text style={styles.abr}>{data.abr}</Text>
          <Text style={styles.nameAction}>{data.name}</Text>
        </View>
        <View style={styles.namesTickets2}>
          <Text style={styles.value}>{data.value}</Text>
          <Text style={styles.nameAction}>{data.percent}</Text>
        </View>
      </View>
    </View>
  );
}