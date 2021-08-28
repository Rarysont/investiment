import React from 'react';
import { TicketListWallet } from "../TicketListWallet"
import { acoes } from "../../utils/acoes"

export function ScrollTicketList() {
  return (
      acoes.map(ac => (
        <TicketListWallet
          key={ac.id}
          title={ac.name}
          abr={ac.abr}
          img={ac.url}
          price={ac.value}
          quantity={ac.qtd}
          percent={ac.percent}
        />
      ))
  )
}
