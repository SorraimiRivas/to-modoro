import { TouchableOpacity, StyleSheet } from "react-native";
import React, { FC } from "react";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
  isTimeRunning: boolean;
};

const PlayPauseButton: FC<Props> = ({ onPress, isTimeRunning }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign
        name={isTimeRunning ? "pausecircle" : "play"}
        size={80}
        color="#00e0ff"
      />
    </TouchableOpacity>
  );
};

export default PlayPauseButton;
