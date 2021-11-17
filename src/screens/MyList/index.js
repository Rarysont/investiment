import React, { useState, useEffect } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Background } from '../../components/background';
import { useAuth } from '../../hooks/auth';
import { ActivityIndicator } from 'react-native-paper';
import { useFavorite } from '../../hooks/favorite';

import styles from './styles';

const MyList = () => {
  const navigation = useNavigation()
  const { userInfo } = useAuth()
  const stop = false
  const {
    loadFavoriteTickets,
    favorite,
    removeFavoriteTicket,
    remove,
    addFavorite,
  } = useFavorite()

  useEffect(() => {
    loadFavoriteTickets()
  }, [remove, stop, addFavorite])


  function handleSearchTicket() {
    navigation.navigate('SearchTicket', { isWallet: false });
  }

  async function handleRemoveFavoritTicket(ac) {
    try {
      const params = {
        idStock: ac.idStock,
        idFavorite: ac.idFavorite,
        active: false
      }

      await removeFavoriteTicket(params, { token: userInfo.token })

    } catch(error) {
      console.log(error.response, "error")
    }
  }

  return(
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <View>
              <Text style={styles.titleHeader}>Meus Favoritos</Text>
              <Text style={styles.subtitleHeader}>{`${favorite?.length} ativos`}</Text>
            </View>
            <RectButton onPress={handleSearchTicket}>
              <Entypo name="plus" size={30} color="#32BD50" />
            </RectButton>
          </View>
          <View style={styles.containerAllFavorites}>
            {favorite.length > 0 ? favorite.map((ac) => {
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
                      <Text style={styles.textValue}>{parseFloat(ac.stock.priceList[0].price.toFixed(2))}</Text>
                    </View>
                    <View style={styles.rowValues}>
                      <Text style={styles.textName}>{ac.stock.companyName}</Text>
                      <Text style={styles.textPercent}>{parseFloat(ac.stock.percentual.toFixed(2))}</Text>
                    </View>
                  </View>
                  <View style={styles.iconsActions}>
                    <RectButton onPress={() => handleRemoveFavoritTicket(ac)}>
                      <Ionicons style={styles.iconClear} name="trash" size={25} color="#000" />
                    </RectButton>
                  </View>
                </View>
              )
            }) : (
              <View style={styles.containerWithoutFavorite}>
                <View style={styles.boxMessage}>
                  <Text style={styles.messageWelcome}>
                    Clique aqui para cadastrar um ativo como favorito
                  </Text>
                </View>
                <View style={styles.containerButton}>
                  <RectButton style={styles.buttonRegister} onPress={handleSearchTicket}>
                    <Text style={styles.messageButton}>Cadastrar</Text>
                  </RectButton>
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </Background>
  );

  // return (
  //   <Background>
  //     <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center'}}>
  //       <ActivityIndicator size={25} color="green" />
  //     </View>
  //   </Background>
  // )

}

export default MyList;
