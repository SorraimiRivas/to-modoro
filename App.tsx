import { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import TimerScreen from "./src/screens/timer/TimerScreen";
import TimerSettingsScreen from "./src/screens/timer/TimerSettingsScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Merriweather-Light": require("./src/assets/fonts/Merriweather-Light.ttf"),
    "Poppins-Black": require("./src/assets/fonts/Poppins-Black.ttf"),
    Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded || fontError) {
    return null;
  }

  return (
    <View className="" onLayout={onLayoutRootView}>
      <TimerSettingsScreen />
      <StatusBar style="auto" />
    </View>
  );
}
