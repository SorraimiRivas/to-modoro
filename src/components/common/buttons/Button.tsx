import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";

type Props = {
  label: string;
  onPress: () => void;
};

const Button: FC<Props> = ({ label, onPress }) => {
  return (
    <TouchableOpacity>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
