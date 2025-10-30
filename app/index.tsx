import { CityItem } from "@/components/CityItem";
import { cities } from "@/data/cities";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingTop: top, paddingBottom: bottom }}
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
