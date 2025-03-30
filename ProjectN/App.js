import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
//import { SafeAreaView } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>ProjectN</Text>
      <Text style={styles.textP}>Hello World!!</Text>
      <StatusBar style='auto' />
      <View style={styles.boxInfo}>
        <Text style={styles.textP}>Information...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6EB2A9",
    alignItems: "center",
    //justifyContent: "center",
  },
  boxInfo: {
    display: "flex",
    backgroundColor: "#4D7C76",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    width: "80%",
    height: "200px",
    borderRadius: "15px",
    margin: "20px",
  },
  textTitle: {
    margin: "10px",
    fontSize: "36px",
    color: "white",
  },
  textP: {
    fontSize: "24px",
  },
});
