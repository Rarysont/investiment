import React,
{
  createContext,
  useContext,
  useState,
} from 'react';

import { listFavoriteStocks, favoriteStocks } from '../service/stock';
import { useAuth } from './auth';

export const FavoriteContext = createContext({});

function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([])
  const [remove, setRemove] = useState("")
  const [addFavorite, setAddFavorite] = useState("")
  const { userInfo } = useAuth()

  async function loadFavoriteTickets () {
    try {
      const response = await listFavoriteStocks({ token: userInfo.token })

      if(response?.value?.length > 0) {
        setFavorite(response?.value)
      } else {
        setFavorite([])
      }

    } catch(error) {
      console.log(error?.response, "error")
    }
  }

  async function removeFavoriteTicket(params) {
    try {
      setRemove("")
      const res = await favoriteStocks(params, { token: userInfo.token })

      if(res.toLowerCase() === 'success') {
        const random = (Math.random() + 1).toString(36).substring(7);
        setRemove(random)
      }
    } catch(error) {
      console.log(error.response, "error")
    }
  }

  async function addFavoriteTicket(value) {
    try {
      const params = {
        idStock: value.id,
        idFavorite: 0,
        active: true
      }
      const response = await favoriteStocks(params, { token: userInfo.token })

      if(response.toLowerCase() === 'success') {
        setAddFavorite(params.idStock)
      }

      return response
    } catch(error) {
      console.log(error.response, "error")
    }
  }

  return (
    <FavoriteContext.Provider value={{
      removeFavoriteTicket,
      loadFavoriteTickets,
      addFavoriteTicket,
      favorite,
      remove,
      setRemove,
      addFavorite,
    }}>
      {children}
    </FavoriteContext.Provider>
  )
}

function useFavorite() {
  const context = useContext(FavoriteContext);

  return context;
}

export {
  FavoriteProvider,
  useFavorite
}
