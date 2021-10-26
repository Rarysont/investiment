import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import { Background } from '../../components/background';
import { acoes } from '../../utils/acoes';
import { useAuth } from '../../hooks/auth';
import { favoriteStocks } from '../../service/stock';

import styles from './styles';

export function MyList(){
  const navigation = useNavigation();
  const { userInfo } = useAuth()

  function handleSearchTicket() {
    navigation.navigate('SearchTicket');
  }

  async function handleRemoveFavoritTicket() {
    try {
      const params = {
        idStock: 111,
        idFavorite: 8,
        active: false
      }

      await favoriteStocks(params, { token: userInfo.token })

    } catch(error) {
      console.log(error, "error")
      console.log(error.response, "error")
    }
  }

  return(
    <ScrollView>
      <Background>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <View>
              <Text style={styles.titleHeader}>Meus Favoritos</Text>
              <Text style={styles.subtitleHeader}>10 ativos</Text>
            </View>
            <RectButton onPress={handleSearchTicket}>
              <Entypo name="plus" size={30} color="#32BD50" />
            </RectButton>
          </View>
          <View style={styles.containerAllFavorites}>
            {acoes.map((ac) => {
              return (
                <View style={styles.favoriteTickets} key={ac.id}>
                  <View style={styles.containerImage}>
                    <Image
                      source={{ uri: ac.image }}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </View>
                  <View style={styles.containerColumnValues}>
                    <View style={styles.rowValues}>
                      <Text style={styles.textAbr}>{ac.abr}</Text>
                      <Text style={styles.textValue}>{ac.value}</Text>
                    </View>
                    <View style={styles.rowValues}>
                      <Text style={styles.textName}>{ac.name}</Text>
                      <Text style={styles.textPercent}>{ac.percent}</Text>
                    </View>
                  </View>
                  <View style={styles.iconsActions}>
                    <RectButton onPress={handleRemoveFavoritTicket}>
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
