import React from 'react';
import { TicketListWallet } from "../TicketListWallet"
import { acoes } from "../../utils/acoes"
import { ScrollView } from "react-native";
import styles from './styles.less'

export function ScrollTicketList() {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
    {
      acoes.map(tckt => (
        <TicketListWallet
          key={tckt.id}
          title={tckt.name}
          img={tckt.url}
          price={tckt.value}
          quantity={tckt.qtd}
        />
      ))
    }
    </ScrollView>
  )
}
