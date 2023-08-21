import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { TimerMode } from "../screens/timer/TimerScreen";

type Props = {
  timerMode: TimerMode;
};

const TimerModeText: FC<Props> = ({ timerMode }) => {
  const message =
    timerMode == "Focus" ? "It's time to Focus" : "It's time to take break";
  return (
    <View>
      <Text className="text-black text-2xl font-semibold ">{message}</Text>
    </View>
  );
};

export default TimerModeText;
