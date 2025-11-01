import { cities } from "@/data/cities";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function CityScreen() {
  const { id } = useLocalSearchParams();
  const city = cities.find((item) => item.id === id);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        CITY SCREEN: {city?.name} | {city?.country}
      </Text>
    </View>
  );
}
