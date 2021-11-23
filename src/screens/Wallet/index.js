import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";
import { RectButton } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { ModalInfoPercent } from '../../components/ModalInfoPercent';
import { Background } from '../../components/background';
import { ScrollTicketList } from '../../components/ScrollTicketList';
import { WalletStarted } from '../../components/TicketListWallet/WalletStarted';
import { useNavigation } from '@react-navigation/native';
import { useWallet } from '../../hooks/wallet';
import styles from './styles';

export function Wallet(){
  const navigation = useNavigation();
  const [eye, setEye] = useState(true);
  const { getTickets, allTickets, addWallet } = useWallet();
  const [auxiliar, setAux] = useState([]);
  const [openInfoModal, setInfoOpenModal] = useState(false);
  const screenWidth = Dimensions.get("window").width;
  const value = parseFloat(allTickets?.totalTicketsValue).toFixed(2);
  const asterisk = '*******';
  const percent = String(percent)?.includes('-') ?
    parseFloat(allTickets?.percentWallet).toFixed(2) :
    `+${parseFloat(allTickets?.percentWallet).toFixed(2)}`;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

  useEffect(() => {
    getTickets();
  }, [addWallet]);

  useEffect(() => {
    renderColors();
  }, [allTickets]);

  function renderColors() {
    const aux = []
    if(allTickets?.listInfoTicket?.length > 0) {
      allTickets?.listInfoTicket?.forEach((item) => {
        const obj = {
          color: `${'#' + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}`,
          legendFontColor: "#7F7F7F",
          legendFontSize: 15,
        }
        const varu = Object.assign(item, obj)
        aux.push(varu);
      })
    }
    setAux(aux)
  }

  function handleCloseModalInfo(){
    setInfoOpenModal(false);
  }

  function handleOpenModalInfo(){
    setInfoOpenModal(true);
  }

  function handleSearchTicket() {
    navigation.navigate('SearchTicket', { isWallet: true });
  }

  if(auxiliar.length) {
    return(
      <Background>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.containerTitleWallet}>
              <Text style={styles.titleWallet}>Carteira</Text>
              <View style={styles.containerIcons}>
                <RectButton onPress={() => setEye(eye ? false : true)}>
                  <AntDesign name="eyeo" size={30} color="#32BD50" />
                </RectButton>
                <View style={{ marginLeft: 20 }}>
                <RectButton onPress={handleSearchTicket}>
                  <Entypo name="plus" size={30} color="#32BD50" />
                </RectButton>
                </View>
              </View>
            </View>
            <ModalInfoPercent
              visible={openInfoModal}
              closeModal={handleCloseModalInfo}
            />
            <View style={styles.containerValue}>
              <Text style={styles.totalValue}>R$ {eye ? value : asterisk}</Text>
              <View style={styles.containerIconsValue}>
                <Text style={[styles.percent, {
                  color: `${String(percent)?.includes('-') ? "#E51C44" : "#32BD50"}`
                }]}>{eye ? percent : asterisk}</Text>
                <View style={{ marginLeft: 10 }}>
                  <RectButton onPress={() => handleOpenModalInfo()}>
                    <Entypo name="info-with-circle" size={22} color="black" />
                  </RectButton>
                </View>
              </View>
            </View>
            <View style={styles.containerGraphic}>
              {auxiliar && <PieChart
                data={auxiliar}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                accessor={"amount"}
                backgroundColor={"transparent"}
                paddingLeft={"10"}
                center={[10, 10]}
                absolute={false}
                name={"code"}
              />}
            </View>
              <View style={styles.containerTicket}>
                <View style={styles.containerDescription}>
                  <Entypo name="list" size={22} color="black" />
                  <Text style={styles.descriptionQtd}>Qtde</Text>
                  <Text style={styles.descriptionPrice}>Preço Atual/Médio</Text>
                  <Text style={styles.descriptionTotal}>Total</Text>
                </View>
                <ScrollTicketList />
              </View>
          </View>
        </ScrollView>
      </Background>
    );
  }

  if(auxiliar?.length === 0 && allTickets?.listInfoTicket?.length === 0) {
    return (
      <Background>
        <View style={styles.container}>
          <WalletStarted />
        </View>
      </Background>
    )
  }

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFF'
      }}
    >
      <ActivityIndicator
        color="#1CC0A0"
        style={{justifyContent: 'center', alignItems: 'center' }}
      />
    </View>
  );

}
