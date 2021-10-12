import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Background } from '../../components/background';
import { acoes } from '../../utils/acoes';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';

export function MyList(){
  return(
    <ScrollView>
      <Background>
        <View style={styles.container}>
          <View style={styles.containerHeader}>
            <View>
              <Text style={styles.titleHeader}>Meus Favoritos</Text>
              <Text style={styles.subtitleHeader}>10 ativos</Text>
            </View>
            <Entypo name="plus" size={30} color="#32BD50" />
          </View>
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
              </View>
            )
          })}
        </View>
      </Background>
    </ScrollView>
  );
}
