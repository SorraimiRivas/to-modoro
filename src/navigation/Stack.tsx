import { createStackNavigator } from "@react-navigation/stack";
import TimerScreen from "../screens/timer/TimerScreen";
import TimerSettingsScreen from "../screens/timer/TimerSettingsScreen";
import { NavigationContainer } from "@react-navigation/native";
import SettingsButton from "../components/common/buttons/SettingsButton";
import { Button, Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export type RootStackParams = {
  Timer: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Timer">
        <Stack.Screen
          name="Timer"
          component={TimerScreen}
          options={{
            headerRight: () => (
              <Pressable>
                <EvilIcons name="gear" />
              </Pressable>
            ),
          }}
        />
        <Stack.Screen name="Settings" component={TimerSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
