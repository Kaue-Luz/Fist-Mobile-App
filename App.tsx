import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 24,
  },
  eventName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: { color: "gray", fontSize: 16 },
});
