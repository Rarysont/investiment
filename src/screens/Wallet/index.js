import React, { useState } from 'react';
import { Text, View, FlatList, SafeAreaView  } from 'react-native';
import { Background } from '../../components/background';
import { Dimensions } from "react-native";
import { ModalWallet } from '../../components/ModalWallet';
import { RectButton } from 'react-native-gesture-handler';
import { CustomButton } from '../../components/Button';
import { acoes } from '../../utils/acoes';
import { TicketList } from '../../components/TicketList';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

import styles from './styles';

export function Wallet(){
  const [openModal, setOpenModal] = useState(false);

  function handleOpenGuilds(){
    setOpenModal(true);
  }

  function handleCloseGuilds(){
    setOpenModal(false);
  }

  const screenWidth = Dimensions.get("window").width;
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Beijing",
      population: 527612,
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "New York",
      population: 8538000,
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Moscow",
      population: 11920000,
      color: "rgb(0, 0, 255)",
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
    useShadowColorFromDataset: false // optional
  };
  
  return(
    <Background>
      <View style={styles.container}>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor={"population"}
          backgroundColor={"transparent"}
          paddingLeft={"10"}
          center={[10, 10]}
          absolute
        />
      </View>

      <View style={styles.containerModal}>
        <View style={styles.bar} />
        <RectButton 
          style={styles.btnModal}
          onPress={handleOpenGuilds}
        >
          <Text style={styles.btnModalTitle}>
            Minha Lista
          </Text>
        </RectButton>
      </View>

      <ModalWallet visible={openModal} closeModal={handleCloseGuilds}>
        <View style={styles.containerList}>
          <FlatList 
            data={acoes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TicketList data={item} />
            )}
            style={styles.myList}
          />
        </View>
      </ModalWallet>
    </Background>
  );
}