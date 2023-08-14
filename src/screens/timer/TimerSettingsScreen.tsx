import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Chip from "../../components/common/chips/Chip";

const TimerSettingsScreen = () => {
  const [selectedMode, setSelectedMode] = React.useState<string>("Classic");

  return (
    <View className="container ">
      <Text className="text-black text-xl mx-10 my-12 font-semibold">
        Settings
      </Text>
      <View>
        <View className="flex-row justify-around">
          <Chip
            label="Classic"
            onPress={() => setSelectedMode("Classic")}
            isActive={selectedMode == "Classic" ? true : false}
          />
          <Chip
            label="Custom"
            onPress={() => setSelectedMode("Custom")}
            isActive={selectedMode == "Custom" ? true : false}
          />
        </View>
      </View>
    </View>
  );
};

export default TimerSettingsScreen;
