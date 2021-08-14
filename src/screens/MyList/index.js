import React from 'react';
import { View, FlatList } from 'react-native';
import { Background } from '../../components/background';
import { acoes } from '../../utils/acoes';
import { ListDivider } from '../../components/ListDivider';
import { TicketList } from '../../components/TicketList';
import styles from './styles';

export function MyList(){
  return(
    <Background>
      <View style={styles.container}>
      <FlatList 
          data={acoes}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TicketList data={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
          style={styles.guilds}
        />
      </View>
    </Background>
  );
}