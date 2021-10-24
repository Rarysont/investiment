import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Header } from '../../components/Header';
import { Background } from '../../components/background';
import { getStocks } from '../../service/stock';
import { Searched } from '../../components/Searched';
import styles from './styles';
import { ActivityIndicator } from 'react-native-paper';

export function SearchTicket(){
  const perPage = 10;
  const [tickets, setTickets] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function handleClearInput() {
    setSearch("")
  }

  useEffect(() => {
    loadSearched()
  }, [])

  async function loadSearched() {
    try {
      if(loading) return null;
        setLoading(true);

        const response = await getStocks({ pPage: page, pCount: perPage });

        if(response.value) {
          setTickets({ ...tickets, ...response?.value?.listStock })
          setPage(page + 1)
          setLoading(false)
          console.log(tickets)
        }
    } catch(error) {
      console.log(error.response)
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
            onChangeText={(text) => setSearch(text)}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            value={search}
            style={styles.textArea}
          />
        </View>

        <View style={styles.containerTicketSearched}>
          {tickets ? (
            <FlatList
              keyExtractor={item => item.id}
              data={tickets}
              renderItem={({ item }) => <Searched tickets={item} />}
              onEndReached={loadSearched}
              onEndReachedThreshold={0.2}
              ListFooterComponent={<FooterList load={loading} />}
            />
          ) : null}

        </View>
      </View>
    </Background>
  );
}
