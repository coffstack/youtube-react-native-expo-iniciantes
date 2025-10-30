import { CityItem } from "@/components/CityItem";
import { cities } from "@/data/cities";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cities}
        renderItem={({ item }) => <CityItem city={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B1B1B",
    flex: 1,
  },
});
