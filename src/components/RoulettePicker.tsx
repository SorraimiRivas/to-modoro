import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
  title: string;
  isOpen: boolean;
  value: number;
  onPress: () => void;
};

const RoulettePicker: FC<Props> = ({ title, isOpen, onPress, value }) => {
  return (
    <>
      <View className="w-96 h-16 my-2 rounded-xl bg-white flex-row justify-between items-center p-2">
        <Text className="font-semibold text-lg">{title}</Text>
        <View className="flex-row justify-around">
          <Text className="mr-4 text-lg">{`${value} min`}</Text>
          <TouchableOpacity onPress={onPress}>
            <Feather
              name={isOpen ? "chevron-up" : "chevron-down"}
              size={31}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>
      {isOpen && (
        <View>
          <Text>Content</Text>
        </View>
      )}
    </>
  );
};

export default RoulettePicker;
