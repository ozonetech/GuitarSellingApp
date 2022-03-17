import { StyleSheet, Dimensions, View } from "react-native";
import Navigation from "./Screens/Routes/Navigation";
export default function App() {
  return (
    <View style={styles.container}>
      <Navigation></Navigation>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, height: "100%" },
});
