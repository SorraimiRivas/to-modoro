import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import TimerSettingsScreen from "./src/screens/timer/TimerSettingsScreen";

const color = "#20B2AA";

export default function App() {
  return (
    <View className="bg-white">
      <TimerSettingsScreen />
      <StatusBar style="auto" />
    </View>
  );
}
