import React, { FC } from "react";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import TimerDisplay from "./TimerDisplay";

type Props = {
  timer: number;
  value: number;
};

const AnimatedProgress: FC<Props> = ({ timer, value }) => {
  const fill = (value / timer) * 100;

  console.log(fill);

  return (
    <>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={fill}
        tintColor="#00e0ff"
        backgroundColor="#3d5875"
        rotation={0}
      />
    </>
  );
};

export default AnimatedProgress;
