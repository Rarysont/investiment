import React from 'react';
import { Image, Text, View } from 'react-native';
import { Background } from '../../components/background';
import Uol  from '../../assets/uol.png';
import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export function News(){

  return(
    <Background>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.boxNews}>
            <Text style={styles.title}>JHSF Participações: ação fecha em alta de 2,8% nesta sexta</Text>
            <Text style={styles.subTitle}>As ações da empresa JHSF Participações (JHSF3) fecharam em alta de 2,8% nesta sexta-feira (5), na B3, a Bolsa de Valores do Brasil. Os papéis da companhia estão cotados a R$ 5,51. A mudança no valor ocorre no mesmo dia em que o Ibovespa, principal índice da B3 (Bolsa de Valores brasileira), variou +1,37%, fechando em 104.824,23 pontos.</Text>
            <Text style={styles.font}>Fonte: economia uol</Text>
          </View>

          <View style={styles.boxNews2}>
            <Text style={styles.title}>Bovespa recua nesta sexta e acumula queda de 6,74% em outubro</Text>
            <Text style={styles.subTitle}>O Ibovespa recuou 2,09%, a 103.501 pontos - menor patamar desde 12 de novembro de 2020 (102.507 pontos). Veja mais cotações Com o resultado, a bolsa acumulou queda de 6,74% no mês.Na semana, o tombo foi de 2,63%. No ano, a perda já é de 13,04%.</Text>
            <Text style={styles.font}>Fonte: G1</Text>
          </View>

          <View style={styles.boxNews2}>
            <Text style={styles.title}>Ações de Magalu (MGLU3) e Via (VIIA3) são impulsionadas por resultado de Mercado Livre e fecham com salto de até 12%</Text>
            <Text style={styles.subTitle}>As ações do Magazine Luiza fecharam com disparada de 12,27% a R$ 12,42. Os papéis da Via subiram 10,79% a R$ 7,29.Os balanços das duas empresas estão previstos para a semana que vem. Via divulgará o resultado na próxima quarta-feira (10) e o Magazine Luiza logo no dia seguinte (11). Americanas (AMER3), que também divulga seus números na próxima semana (dia 11), também teve ganhos, ainda que mais modestos, de 6,59% para os ativos AMER3, a R$ 34,95, enquanto LAME4 teve alta de 7,42%, a R$ 6,08.</Text>
            <Text style={styles.font}>Fonte: InfoMoney</Text>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
}
