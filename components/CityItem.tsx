import { StyleSheet, Text, View } from "react-native";

import { City } from "@/data/types";

type CityItemProps = {
  city: City;
};
export function CityItem({ city }: CityItemProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{city.name}</Text>
      <Text style={styles.description}>{city.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#FF4B4B",
    // paddingHorizontal: 8,
    // paddingVertical: 16,
    padding: 16,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 600,
  },
  description: {
    color: "#FFF",
    fontSize: 16,
  },
});
