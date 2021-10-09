import React, { useState } from 'react';
import { Text, View, ScrollView, Dimensions } from 'react-native';
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

import styles from './styles';

export function Wallet(){
  const [eye, setEye] = useState(true);
  const [openInfoModal, setInfoOpenModal] = useState(false);
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const value = '21.447,80';
  const asterisk = '*******';
  const percent = '37,40 (0,18%)';
  const data = [
    {
      name: "MGLU3",
      quantity: 30,
      color: `${'#' + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "VALE3",
      quantity: 10,
      color: `${'#' + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "BBDC4",
      quantity: 2,
      color: `${'#' + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "VVAR3",
      quantity: 7,
      color: `${'#' + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "LREN3",
      quantity: 8,
      color: `${'#' + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "AMER3",
      quantity: 14,
      color: `${'#' + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "CVCB3",
      quantity: 13,
      color: `${'#' + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "NTC03",
      quantity: 50,
      color: `${'#' + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "SBSP3",
      quantity: 70,
      color: `${'#' + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0,6)}`,
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false
  };

  function handleCloseModalInfo(){
    setInfoOpenModal(false);
  }

  function handleOpenModalInfo(){
    setInfoOpenModal(true);
  }

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
                <Entypo name="plus" size={30} color="#32BD50" />
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
              <Text style={[styles.percent, { color: '#32BD50' }]}>R$ {eye ? percent : asterisk}</Text>
              <View style={{ marginLeft: 10 }}>
                <RectButton onPress={() => handleOpenModalInfo()}>
                  <Entypo name="info-with-circle" size={22} color="black" />
                </RectButton>
              </View>
            </View>
          </View>
          <View style={styles.containerGraphic}>
            <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor={"quantity"}
              backgroundColor={"transparent"}
              paddingLeft={"10"}
              center={[10, 10]}
              absolute={false}
            />
          </View>
            <View style={styles.containerTicket}>
              <View style={styles.containerAddTicket}>
                <Text style={styles.titleMyTicket}>Meus Tickets</Text>
                <Entypo name="plus" size={24} color="#32BD50" />
              </View>

              <View style={styles.containerQuantityTicket}>
                <Text style={styles.titleQuantityTicket}>7 ativos</Text>
              </View>
              <ScrollTicketList />
            </View>
        </View>
      </ScrollView>
    </Background>
  );
}
