import React, { FC } from "react";
import { Pressable } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
};

const SettingsButton: FC<Props> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <EvilIcons name="gear" size={20} color="black" />
    </Pressable>
  );
};

export default SettingsButton;
