import { createStackNavigator } from "@react-navigation/stack";
import TimerScreen from "../screens/timer/TimerScreen";
import TimerSettingsScreen from "../screens/timer/TimerSettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import SettingsButton from "../components/common/buttons/SettingsButton";
import { Button, Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import GoBackButton from "../components/common/buttons/GoBackButton";

export type RootStackParams = {
  Timer: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Timer"
        screenOptions={{
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="Timer"
          component={TimerScreen}
          options={{
            headerRight: () => <SettingsButton />,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={TimerSettingsScreen}
          options={{
            headerLeft: () => <GoBackButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
