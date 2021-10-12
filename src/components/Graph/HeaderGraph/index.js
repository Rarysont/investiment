import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
} from "react-native-reanimated";
import { ReText, round } from "react-native-redash";
import { graphs, SIZE } from "../../../utils/Model";

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  values: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  value: {
    fontWeight: "500",
    fontSize: 24,
  },
  label: {
    fontSize: 18,
  },
});

const HeaderGraph = ({ translation, index }) => {
  const data = useDerivedValue(() => graphs[index.value].data);
  const price = useDerivedValue(() => {
    const p = interpolate(
      translation.y.value,
      [0, SIZE],
      [data.value.maxPrice, data.value.minPrice]
    );
    return `$ ${round(p, 2).toLocaleString("pt-BR", { currency: "BRL" })}`;
  });
  const percentChange = useDerivedValue(
    () => `${round(data?.value?.percentChange, 3)}%`
  );
  const label = useDerivedValue(() => data?.value?.label);
  const style = useAnimatedStyle(() => ({
    fontWeight: "500",
    fontSize: 24,
    color: data?.value?.percentChange > 0 ? "green" : "red",
  }));
  return (
    <View style={styles.container}>
      <View style={styles.values}>
        <View>
          <ReText style={styles.value} text={price} />
          <Text style={styles.label}>MGLU</Text>
        </View>
        <View>
          <ReText style={style} text={percentChange} />
          <ReText style={styles.label} text={label} />
        </View>
      </View>
    </View>
  );
};

export default HeaderGraph;
