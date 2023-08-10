import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screen/timer/TimerScreen";
import TimerSettingsScreen from "./screen/timer/TimerSettingsScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen /> */}
      <TimerSettingsScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20B2AA",
    alignItems: "center",
    justifyContent: "center",
  },
});
