import { createStackNavigator } from "@react-navigation/stack";
import TimerScreen from "../screens/timer/TimerScreen";
import TimerSettingsScreen from "../screens/timer/TimerSettingsScreen";
import { NavigationContainer } from "@react-navigation/native";

export type RootStackParams = {
  Timer: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Settings"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Timer" component={TimerScreen} />
        <Stack.Screen name="Settings" component={TimerSettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
