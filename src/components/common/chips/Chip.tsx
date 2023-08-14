import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  isActive: boolean;
};

const Chip: FC<Props> = ({ label, onPress, isActive }) => {
  return (
    <Pressable onPress={onPress}>
      <View
        className="rounded-xl px-2 py-1 m-1 "
        style={
          isActive ? { backgroundColor: "blue" } : { backgroundColor: "gray" }
        }
      >
        <Text className="text-white">{label}</Text>
      </View>
    </Pressable>
  );
};

export default Chip;
