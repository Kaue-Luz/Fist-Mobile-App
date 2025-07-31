import { Text, View } from "react-native";
import { styles } from "./Styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2025</Text>
    </View>
  );
}
