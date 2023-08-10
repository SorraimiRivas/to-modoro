import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { TimerMode } from "../screen/timer/TimerScreen";

type Props = {
  timerMode: TimerMode;
};

const TimerModeText: FC<Props> = ({ timerMode }) => {
  const message =
    timerMode == "Focus" ? "Its time to Focus" : "Its time to take break";
  return (
    <View>
      <Text style={styles.text}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#FFFF",
    fontSize: 24,
    fontWeight: "800",
    margin: 20,
  },
});

export default TimerModeText;
