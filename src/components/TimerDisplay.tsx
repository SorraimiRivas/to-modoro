import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";

type Props = {
  time: Date;
};

const TimerDisplay: FC<Props> = ({ time }) => {
  return (
    <View>
      <Text style={styles.text}>
        {time.getMinutes().toString().padStart(2, "0")}:
        {time.getSeconds().toString().padStart(2, "0")}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#FFFF",
    fontSize: 24,
    fontWeight: "800",
  },
});

export default TimerDisplay;
