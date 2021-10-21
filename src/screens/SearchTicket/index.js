import React, { useState } from 'react';
import { Text, View, Image, ScrollView, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/MaterialIcons';
import { acoes }  from '../../utils/acoes';
import { Header } from '../../components/Header';
import { Background } from '../../components/background';
import { getStocks } from '../../service/stock';

import styles from './styles';

export function SearchTicket(){
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function handleClearInput() {
    setSearch("")
  }

  async function handleStock() {
    const response = await getStocks();
    console.log(response)
  }

  return(
    <Background>
    <Header title="Ativos" />
      <ScrollView>
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
            {acoes.map((ac) => {
              return (
                <RectButton style={styles.containerTicketSearched} key={ac.id}>
                  <View style={[styles.boxTickets, { borderBottomWidth: 2, borderColor: "#9E9EAC" }]}>
                    <View style={styles.propertyTicket}>
                      <Text style={styles.titleTicket}>{ac.abr}</Text>
                      <Text style={styles.subTitleTicket}>{ac.name}</Text>
                    </View>
                    <View style={styles.checkBox}>
                      {ac.active === true ? <Icon name="check-box" size={30} color="#32BD50" /> : <Icon name="check-box-outline-blank" size={30} color="#000000" />}
                    </View>
                  </View>
                </RectButton>
              )
            })}
          </View>
         </View>
      </ScrollView>
    </Background>
  );
}
