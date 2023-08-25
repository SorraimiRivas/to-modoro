import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";

const RouletteSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [selectedSeconds, setSelectedSeconds] = useState(0);

  const handleMinuteScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const newIndex = Math.round(offsetY / 10); // Adjust 10 to your design
    setSelectedMinutes(newIndex);
  };

  const handleSecondScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const newIndex = Math.round(offsetY / 10); // Adjust 10 to your design
    setSelectedSeconds(newIndex);
  };
  return (
    <View className="flex-row justify-around">
      <View>
        <Text className="text-sm my-2">Min</Text>
        <ScrollView
          contentContainerStyle={{}}
          showsVerticalScrollIndicator={false}
          contentOffset={{ y: selectedMinutes * 10, x: 0 }}
          onScroll={handleMinuteScroll}
        >
          {Array.from({ length: 90 }).map((_, index) => (
            <Text className="text-xl my-4" key={index}>
              {(index + 1).toString().padStart(2, "0")}
            </Text>
          ))}
        </ScrollView>
      </View>
      <View className="mb-2">
        <Text className="text-sm my-2">Sec</Text>
        <ScrollView
          contentContainerStyle={{ marginBottom: 10 }}
          showsVerticalScrollIndicator={false}
          contentOffset={{ y: selectedSeconds * 10, x: 0 }}
          onScroll={handleSecondScroll}
        >
          {Array.from({ length: 60 }).map((_, index) => (
            <Text className="text-xl my-4" key={index}>
              {(index + 1).toString().padStart(2, "0")}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default RouletteSelector;
