import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Background } from '../../components/background';
import { acoes } from '../../utils/acoes';
import { useAuth } from '../../hooks/auth';
import { favoriteStocks, listFavoriteStocks } from '../../service/stock';

import styles from './styles';

export function MyList(){
  const navigation = useNavigation()
  const { userInfo } = useAuth()
  const [favoriteTicket, setFavoriteTicket] = useState([])

  useEffect(() => {
    loadFavoriteTickets()
  }, [])

  function handleSearchTicket() {
    navigation.navigate('SearchTicket');
  }

  async function handleRemoveFavoritTicket(ac) {
    try {
      const params = {
        idStock: ac.idStock,
        idFavorite: ac.idFavorite,
        active: false
      }

      await favoriteStocks(params, { token: userInfo.token })

    } catch(error) {
      console.log(error.response, "error")
    }
  }

  async function loadFavoriteTickets() {
    try {
      const response = await listFavoriteStocks({ token: userInfo.token })

      if(response?.value) {
        setFavoriteTicket(response)
      }
    } catch(error) {
      console.log(error.response, "error")
    }
  }

  if(favoriteTicket?.value?.length > 0) {
    return(
      <ScrollView style={styles.container}>
        <Background>
          <View style={styles.container}>
            <View style={styles.containerHeader}>
              <View>
                <Text style={styles.titleHeader}>Meus Favoritos</Text>
                <Text style={styles.subtitleHeader}>{`${favoriteTicket?.value.length} ativos`}</Text>
              </View>
              <RectButton onPress={handleSearchTicket}>
                <Entypo name="plus" size={30} color="#32BD50" />
              </RectButton>
            </View>
            <View style={styles.containerAllFavorites}>
              {favoriteTicket?.value.map((ac) => {
                return (
                  <View style={styles.favoriteTickets} key={ac.idFavorite}>
                    <View style={styles.containerImage}>
                      <Image
                        source={{ uri: `data:image/png;base64,${ac.stock.companyLogo64}` }}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={styles.containerColumnValues}>
                      <View style={styles.rowValues}>
                        <Text style={styles.textAbr}>{ac.stock.code}</Text>
                        <Text style={styles.textValue}>{ac.stock.priceList[0].price}</Text>
                      </View>
                      <View style={styles.rowValues}>
                        <Text style={styles.textName}>{ac.stock.companyName}</Text>
                        <Text style={styles.textPercent}>{ac.stock.percentual}</Text>
                      </View>
                    </View>
                    <View style={styles.iconsActions}>
                      <RectButton onPress={() => handleRemoveFavoritTicket(ac)}>
                        <Ionicons style={styles.iconClear} name="trash" size={25} color="#000" />
                      </RectButton>
                    </View>
                  </View>
                )
              })}
            </View>
          </View>
        </Background>
      </ScrollView>
    );
  }

  return (
    <View>
      <Text>Opa</Text>
    </View>
  )
}
