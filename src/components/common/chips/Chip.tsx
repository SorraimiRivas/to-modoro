import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  isActive: boolean;
};

const Chip: FC<Props> = ({ label, onPress, isActive }) => {
  const bgColor = isActive ? `bg-blue-400` : `bg-[#F0F0F0]`;
  const textColor = isActive ? `text-white` : "text-[#333333]";
  const borderColor = isActive ? `border-black` : "bg-[#BBBBBB]";

  return (
    <Pressable onPress={onPress}>
      <View
        className={`${bgColor} ${borderColor} border rounded-full px-2 py-1 m-1 `}
      >
        <Text className={`${textColor} text-xl`}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default Chip;
