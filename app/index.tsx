import { CityItem } from "@/components/CityItem";
import { cities } from "@/data/cities";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{
          paddingTop: top,
          paddingBottom: bottom,
          paddingHorizontal: 16,
        }}
        data={cities}
        renderItem={({ item }) => <CityItem city={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: "#5c5c5c",
              marginVertical: 32,
            }}
          />
        )}
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
