import { Image, StyleSheet, Text, View } from "react-native";

import { City } from "@/data/types";

type CityItemProps = {
  city: City;
};
export function CityItem({ city }: CityItemProps) {
  return (
    <View style={styles.card}>
      <Image
        source={city.coverImage}
        style={{ height: 280, width: "100%" }}
        borderRadius={16}
        // resizeMode="cover"
      />
      <Text style={styles.title}>{city.name}</Text>
      <Text style={styles.description}>{city.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // borderWidth: 1,
    // borderColor: "#FF4B4B",
    // paddingHorizontal: 8,
    // paddingVertical: 16,
    // padding: 16,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 600,
    marginTop: 16,
  },
  description: {
    color: "#FFF",
    fontSize: 16,
    marginTop: 8,
  },
});
