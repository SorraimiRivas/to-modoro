import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";

type Props = {
  label: string;
  onPress: () => void;
};

const Button: FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      className="w-28 bg-cyan-500 rounded-md p-2 justify-center items-center"
      onPress={onPress}
    >
      <Text className="text-lg">{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
