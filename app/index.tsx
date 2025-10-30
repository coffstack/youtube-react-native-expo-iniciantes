import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        backgroundColor: "#1B1B1B",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // flexDirection: "row",
      }}
    >
      <Text style={styles.title}>Hello world</Text>
      <Text style={[styles.title, { color: "red" }]}>my first app</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 600,
  },
});
