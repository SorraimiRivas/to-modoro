import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Chip from "../../components/common/chips/Chip";
import useSetTime from "../../hooks/useSetTime";
import RadioButton from "../../components/common/buttons/RadioButton";

type Status = "1" | "2" | "3";

const TimerSettingsScreen = () => {
  const [selectedMode, setSelectedMode] = React.useState<string>(
    "Classic" || "Custom"
  );
  const [checked, setChecked] = React.useState<Status>("1");

  const { setFocusTime, setBreakTime } = useSetTime();

  useEffect(() => {
    switch (checked) {
      case "1":
        setFocusTime(25);
        setBreakTime(5);
      case "2":
        setFocusTime(30);
        setBreakTime(5);
      case "3":
        setFocusTime(90);
        setBreakTime(15);
        break;
      default:
        break;
    }
  }, [checked]);

  return (
    <View className="container ">
      <Text className="text-black text-xl mx-10 my-12 font-semibold">
        Settings
      </Text>
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
      <View className="mx-5 my-10">
        <RadioButton
          disabled={selectedMode == "Custom" ? true : false}
          label="25:00 Minutes of Focus & 05:00 Minutes of Break"
          status={checked == "1" ? "checked" : "unchecked"}
          onPress={() => setChecked("1")}
        />
        <RadioButton
          disabled={selectedMode == "Custom" ? true : false}
          label="30:00 & 05:00 Minutes"
          status={checked == "2" ? "checked" : "unchecked"}
          onPress={() => setChecked("2")}
        />
        <RadioButton
          disabled={selectedMode == "Custom" ? true : false}
          label="90:00 & 15:00 Minutes"
          status={checked == "3" ? "checked" : "unchecked"}
          onPress={() => setChecked("3")}
        />
      </View>
    </View>
  );
};

export default TimerSettingsScreen;
