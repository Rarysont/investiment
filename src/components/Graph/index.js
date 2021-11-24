import React, { useEffect, useState } from "react";
import { Text, View, Dimensions } from "react-native";
import {
  LineChart,
} from "react-native-chart-kit";
import { RectButton } from 'react-native-gesture-handler';
import { Header } from "../Header";
import { Background } from "../background";
import styles from './styles.less';
import { getDataGraphic } from "../../service/graphic";
import { useAuth } from "../../hooks/auth";

const Graph = ({ route }) => {
  const { idTicket } = route?.params;
  const { userInfo } = useAuth();
  const [dataResponse, setDataResponse] = useState([]);
  const [filterGraph, setFilterGraph] = useState("Year")

  const [response, setResponse] = useState([]);

  useEffect(() => {
    getValuesGraphic()
  }, [idTicket, filterGraph])

  useEffect(() => {
    renderDataWithColor()
  }, [response])

  async function getValuesGraphic() {
    try {
      const params = {
        stockId: idTicket,
        typeProgression: filterGraph,
      }
      const data = await getDataGraphic(params, userInfo.token);
      if(data?.value) setResponse(data?.value)
    } catch(error) {
      console.error(error);
    }
  }

  function renderDataWithColor() {
    const aux1 = [];
    const aux2 = [];
    if(response?.length > 0) {
      response?.forEach((item, index) => {
        if(index === 0 || index === response?.length - 1 || index === ((response.length / 2) - 1)) {
          aux1.push(item.description);
        } else {
          aux1.push("")
        }
        aux2.push(parseFloat(item.price).toFixed(2));
      })

      const obj = {
        labels: aux1,
        datasets: [
          {
            data: aux2,
            color: (opacity = 1) => `rgba(229, 28, 68, ${opacity})`,
            strokeWidth: 10
          }
        ],
        legend: [`${response[0].code}`]
      }

      setDataResponse(obj)
    }
  }

  function handleTypeProgression(value) {
    setFilterGraph(value)
  }

  return (
    <Background>
      <Header title="Gráfico" />
      <View style={styles.container}>
        {dataResponse?.datasets?.length > 0 && <LineChart
          data={dataResponse}
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel="R$"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: "#000000",
            backgroundGradientFrom: "#000000",
            backgroundGradientTo: "#000000",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "7",
              strokeWidth: "2",
              stroke: "#E51C44"
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16
          }}
        />}
        <View style={styles.containerFilter}>
          <RectButton style={styles.filter} onPress={() => handleTypeProgression("Year")}>
            <Text style={styles.titleFilter}>
              Anual
            </Text>
          </RectButton>
          <RectButton style={styles.filter} onPress={() => handleTypeProgression("Month")}>
            <Text style={styles.titleFilter}>
              Mensal
            </Text>
          </RectButton>
          {/* <RectButton style={styles.filter}>
            <Text style={styles.titleFilter}>
              Semanal
            </Text>
          </RectButton> */}
        </View>
      </View>
    </Background>
  );
};

export default Graph;
