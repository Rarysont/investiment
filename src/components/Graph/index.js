import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import {
  LineChart,
} from "react-native-chart-kit";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  containerSvg: {
    marginTop: 20,
  },
  backgroundSelection: {
    backgroundColor: "#1CC0A0",
    ...StyleSheet.absoluteFillObject,
    width: BUTTON_WIDTH,
    borderRadius: 8,
  },
  selection: {
    flexDirection: "row",
    width: SELECTION_WIDTH,
    alignSelf: "center",
  },
  labelContainer: {
    padding: 10,
    width: BUTTON_WIDTH,
  },
  label: {
    fontSize: 14,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const Graph = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 130, 43],
        color: (opacity = 1) => `rgba(16, 245, 27, ${opacity})`,
        strokeWidth: 2
      }
    ],
    legend: ["Rainy Days"]
  };
  return (
    <View style={styles.container}>
      <Header title="Gráfico" />
      <LineChart
        data={data}
        width={Dimensions.get("window").width}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: "#CCC",
          backgroundGradientFrom: "#CCC",
          backgroundGradientTo: "#CCC",
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#0337D9"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
    </View>
  );
};

export default Graph;
