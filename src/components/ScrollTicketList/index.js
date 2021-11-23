import React from 'react';
import { TicketListWallet } from "../TicketListWallet"
import { acoes } from "../../utils/acoes"
import { Text, View } from 'react-native';
import { useWallet } from '../../hooks/wallet';

export function ScrollTicketList() {
  const { allTickets } = useWallet()

  if(allTickets?.listInfoTicket?.length > 0) {
    return (
      allTickets?.listInfoTicket?.map(ac => (
        <TicketListWallet
          key={ac.idTicket}
          image={ac.companyLogo}
          title={ac.companyName}
          abr={ac.name}
          price={ac.averagePrice}
          lastPrice={ac.lastPrice}
          quantity={ac.amount}
          percent={ac.percent}
          total={ac.totalStock}
        />
      ))
    )
  }

  return (
    <View>
      <Text>Você não ativos na sua carteira!</Text>
    </View>
  )
}
