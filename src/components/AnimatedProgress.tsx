import React, { FC, useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { useGlobalContext } from "../context/GlobalContext";

type Props = {
  timer: number;
  value: number;
};

const AnimatedProgress: FC<Props> = ({ timer, value }) => {
  const [currentRound, setCurrentRound] = useState<number>(1);
  const { numberOfRounds } = useGlobalContext();

  const fill = (timer / value) * 100;
  const timerDate = new Date(timer * 1000);

  const showTimer = () => {
    return (
      <View className="rounded-full h-40 w-40 justify-center">
        <Text className="text-4xl font-bold self-center ">{`${timerDate
          .getMinutes()
          .toString()
          .padStart(2, "0")}:${timerDate
          .getSeconds()
          .toString()
          .padStart(2, "0")}`}</Text>
        <Text className="self-center mt-4 text-lg font-bold">{`${currentRound} / ${numberOfRounds}`}</Text>
      </View>
    );
  };

  return (
    <>
      <AnimatedCircularProgress
        size={300}
        width={50}
        fill={fill}
        tintColor="#00e0ff"
        backgroundColor="#484d52"
        rotation={0}
        children={showTimer}
      />
    </>
  );
};

export default AnimatedProgress;
