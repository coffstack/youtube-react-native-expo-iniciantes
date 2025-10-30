import { StyleSheet, Text } from "react-native";

import { City } from "@/data/types";

type CityItemProps = {
  city: City;
};
export function CityItem({ city }: CityItemProps) {
  return <Text style={styles.title}>{city.name}</Text>;
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 600,
  },
});
