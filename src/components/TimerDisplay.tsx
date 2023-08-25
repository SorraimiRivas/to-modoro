import { View, Text } from "react-native";
import React, { FC } from "react";

type Props = {
  time: number;
};

const TimerDisplay: FC<Props> = ({ time }) => {
  const seconds = time * 60;
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return (
    <View>
      <Text className="text-black text-2xl font-semibold">{`${minutes
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`}</Text>
    </View>
  );
};

export default TimerDisplay;
