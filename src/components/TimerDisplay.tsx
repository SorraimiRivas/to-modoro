import { View, Text } from "react-native";
import React, { FC } from "react";

type Props = {
  time: number;
};

const TimerDisplay: FC<Props> = ({ time }) => {
  const seconds = time * 60;

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const formatedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return (
    <View>
      <Text className="text-black text-2xl font-semibold">{`${hours
        .toString()
        .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`}</Text>
    </View>
  );
};

export default TimerDisplay;
