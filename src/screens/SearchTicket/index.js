import React, { useState, useEffect, useCallback } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Header } from '../../components/Header';
import { Background } from '../../components/background';
import { getStocks } from '../../service/stock';
import { Searched } from '../../components/Searched';
import { SearchTicketHeader } from './SearchTicketHeader';
import { useAuth } from '../../hooks/auth';
import styles from './styles';
import { ActivityIndicator } from 'react-native-paper';

export function SearchTicket({ route }){
  const { isWallet } = route?.params;
  const perPage = 15;
  const { userInfo } = useAuth()
  const [tickets, setTickets] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    loadSearched()
  }, [search])

  function handleClearInput() {
    setSearch("")
    setTickets([])
  }

  const handleChangeSearch = useCallback((value) => {
    setPage(1)
    if(value) {
      setTickets([])
      setSearch(value)
    }

    if(value.length === 0 ) {
      setSearch("")
      setTickets([])
    }
  }, [search])

  async function loadSearched() {
    try {
      setLoading(true);

      const response = await getStocks({
        pPage: page,
        pCount: perPage,
        pCodeFilter: search,
        token: userInfo.token,
      });

      if(response?.value?.listStock.length > 0) {
        setTickets([ ...tickets, ...response?.value?.listStock ])
        setPage(page + 1)
      }

      setLoading(false)
    } catch(error) {
      console.log(error.response, "error")
    }
  }

  function FooterList({ load }) {
    if(!load) return null

    return (
      <View>
        <ActivityIndicator size={25} color="green" />
      </View>
    )
  }

  return(
    <Background>
      <Header title="Ativos" />
      <View style={styles.container}>
        <View style={[styles.containerSearch, isFocused && { borderWidth: 2, borderColor: '#32BD50'}]}>
          {search === "" ? <Icon style={styles.iconSearch} name="search" size={30} color={`${isFocused ? "#32BD50": "#666460"}`} /> :
          (
            <>
              <RectButton onPress={handleClearInput}>
                <Icon style={styles.iconClear} name="close" size={30} color={`${isFocused ? "#32BD50": "#666460"}`} />
              </RectButton>
            </>
          )}
          <TextInput
            placeholder="Pesquise pelos ativos"
            placeholderTextColor="#666460"
            onChangeText={(text) => handleChangeSearch(text)}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            value={search}
            style={styles.textArea}
          />
        </View>

        <View style={styles.containerTicketSearched}>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={tickets}
            renderItem={({ item }) => <Searched tickets={item} isWallet={isWallet} />}
            onMomentumScrollEnd={loadSearched}
            ListFooterComponent={<FooterList load={loading} />}
          />
        </View>
      </View>
    </Background>
  );
}
