import { View, Text } from "react-native";
import React, { FC } from "react";

type Props = {
  time: Date;
};

const TimerDisplay: FC<Props> = ({ time }) => {
  return (
    <View>
      <Text>
        {time.getMinutes().toString().padStart(2, "0")}:
        {time.getSeconds().toString().padStart(2, "0")}
      </Text>
    </View>
  );
};

export default TimerDisplay;
