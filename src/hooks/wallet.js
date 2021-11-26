import React,
{
  createContext,
  useContext,
  useState,
} from 'react';

import { addOrRemoveWallet, getAllTickets } from '../service/wallet';
import { useAuth } from './auth';

export const WalletContext = createContext({});

function WalletProvider({ children }) {
  const [addWallet, setAddWallet] = useState("")
  const [allTickets, setAllTickets] = useState("")
  const { userInfo } = useAuth()

  async function addWalletOrRemoveWallet(value) {
    const response = await addOrRemoveWallet(value);
    if(response.toLowerCase() === 'success') {
      const random = (Math.random() + 1).toString(36).substring(7);
      setAddWallet(random)
    }

    return response
  }

  async function getTickets() {
    try {
      const response = await getAllTickets({ token: userInfo.token });
      if(response?.value?.listInfoTicket.length > 0) {
        setAllTickets(response?.value)
      } else {
        setAllTickets([])
      }

      return response
    } catch(error) {
        console.error(error.response, "wallet")
    }
  }

  return (
    <WalletContext.Provider value={{
      addWallet,
      addWalletOrRemoveWallet,
      getTickets,
      allTickets,
    }}>
      {children}
    </WalletContext.Provider>
  )
}

function useWallet() {
  const context = useContext(WalletContext);

  return context;
}

export {
  WalletProvider,
  useWallet
}
