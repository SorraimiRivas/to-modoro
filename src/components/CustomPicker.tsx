import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import RouletteSelector from "./RouletteSelector";

type Props = {
  title: string;
  isOpen: boolean;
  value: number;
  onPress: () => void;
};

const CustomPicker: FC<Props> = ({ title, isOpen, onPress, value }) => {
  const { width } = useWindowDimensions();
  const rounded = isOpen ? "rounded-t-xl" : "rounded-xl";
  return (
    <View className="my-2 overflow-hidden">
      <View
        style={{ width: width - 25 }}
        className={`h-20 ${rounded} bg-white flex-row justify-between items-center px-6`}
      >
        <Text className="text-lg">{title}</Text>
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
        <View
          style={{ width: width - 25 }}
          className="h-64 bg-white rounded-b-xl"
        >
          <View className="border border-gray-200 border-solid mx-1" />
          <View>
            <RouletteSelector />
          </View>
        </View>
      )}
    </View>
  );
};

export default CustomPicker;
