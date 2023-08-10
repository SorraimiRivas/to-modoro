import { View, Text, Pressable, TouchableOpacity } from "react-native";
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
        name={isTimeRunning ? "pausecircleo" : "playcircleo"}
        size={120}
      />
    </TouchableOpacity>
  );
};

export default PlayPauseButton;
