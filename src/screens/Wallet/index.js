import React, { useState } from 'react';
import { Text, View, ScrollView  } from 'react-native';
import { Background } from '../../components/background';
import { Dimensions } from "react-native";
import { ScrollTicketList } from '../../components/ScrollTicketList';
import { Entypo } from '@expo/vector-icons';
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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerGraphic}>
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
            <View style={styles.containerTicket}>
              <View style={styles.containerAddTicket}>
                <Text style={styles.titleMyTicket}>Meus Tickets</Text>
                <Entypo name="plus" size={24} color="black" />
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
