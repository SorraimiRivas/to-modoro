import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import Chip from "../../components/common/chips/Chip";
import useSetTime from "../../hooks/useSetTime";
import RadioButton from "../../components/common/buttons/RadioButton";
import { Slider } from "@react-native-assets/slider";
import Button from "../../components/common/buttons/Button";

type Status = "1" | "2" | "3" | "4" | "5" | "6";
type Mode = "Classic" | "Custom";

const TimerSettingsScreen = () => {
  const [selectedMode, setSelectedMode] = React.useState<Mode>("Classic");
  const [checkedFocus, setCheckedFocus] = React.useState<Status>("1");
  const [checkedBreak, setCheckedBreak] = React.useState<Status>("4");

  const { focusTime, breakTime, setFocusTime, setBreakTime } = useSetTime();

  useEffect(() => {
    switch (checkedFocus) {
      case "1":
        setFocusTime(25);
        break;
      case "2":
        setFocusTime(30);
        break;
      case "3":
        setFocusTime(90);
        break;
      default:
        break;
    }
  }, [checkedFocus, selectedMode]);

  useEffect(() => {
    switch (checkedBreak) {
      case "4":
        setBreakTime(5);
        break;
      case "5":
        setBreakTime(10);
        break;
      case "6":
        setBreakTime(15);
        break;
      default:
        break;
    }
  }, [checkedBreak, selectedMode]);

  return (
    <View className="mx-10">
      <Text className="text-black text-xl my-12 font-semibold">Settings</Text>
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
      <View className="my-10 flex-row justify-between">
        <View>
          <Text
            className={`${
              selectedMode == "Classic" ? "text-black" : "text-gray-400"
            } font-Merriweather mb-1`}
          >
            Focus Time
          </Text>
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="25:00 Minutes"
            status={checkedFocus == "1" ? "checked" : "unchecked"}
            onPress={() => setCheckedFocus("1")}
          />
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="30:00 Minutes"
            status={checkedFocus == "2" ? "checked" : "unchecked"}
            onPress={() => setCheckedFocus("2")}
          />
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="90:00 Minutes"
            status={checkedFocus == "3" ? "checked" : "unchecked"}
            onPress={() => setCheckedFocus("3")}
          />
        </View>
        <View className="">
          <Text
            className={`${
              selectedMode == "Classic" ? "text-black" : "text-gray-400"
            } font-Merriweather mb-1`}
          >
            Break Time
          </Text>
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="05:00 Minutes"
            status={checkedBreak == "4" ? "checked" : "unchecked"}
            onPress={() => setCheckedBreak("4")}
          />
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="10:00 Minutes"
            status={checkedBreak == "5" ? "checked" : "unchecked"}
            onPress={() => setCheckedBreak("5")}
          />
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="15:00 Minutes"
            status={checkedBreak == "6" ? "checked" : "unchecked"}
            onPress={() => setCheckedBreak("6")}
          />
        </View>
      </View>
      <View className="">
        <View className="mb-4">
          <Text
            className={`${
              selectedMode == "Custom" ? "text-black" : "text-gray-400"
            } font-Merriweather text-base `}
          >{`Focus Time: ${
            selectedMode == "Custom" ? focusTime : 25
          } Minutes`}</Text>
          <Slider
            value={selectedMode == "Custom" ? focusTime : 25}
            minimumValue={5}
            step={5}
            minimumTrackTintColor={
              selectedMode == "Custom" ? "#00CCFF" : "#9ca3af"
            }
            maximumTrackTintColor={
              selectedMode == "Custom" ? "#4b5563" : "#d1d5db"
            }
            maximumValue={90}
            onValueChange={(value) => setFocusTime(value)}
            enabled={selectedMode == "Custom" ? true : false}
            thumbTintColor={selectedMode == "Custom" ? "#00CCFF" : "#9ca3af"}
            thumbSize={30}
            trackHeight={10}
            slideOnTap
          />
        </View>
        <View>
          <Text
            className={`${
              selectedMode == "Custom" ? "text-black" : "text-gray-400"
            } font-Merriweather text-base`}
          >{`Break Time: ${
            selectedMode == "Custom" ? breakTime : 5
          } Minutes`}</Text>
          <Slider
            value={selectedMode == "Custom" ? breakTime : 5}
            minimumValue={5}
            step={5}
            minimumTrackTintColor={
              selectedMode == "Custom" ? "#00CCFF" : "#9ca3af"
            }
            maximumTrackTintColor={
              selectedMode == "Custom" ? "#4b5563" : "#d1d5db"
            }
            maximumValue={30}
            onValueChange={(value) => setBreakTime(value)}
            enabled={selectedMode == "Custom" ? true : false}
            thumbTintColor={selectedMode == "Custom" ? "#00CCFF" : "#9ca3af"}
            thumbSize={30}
            thumbStyle={{ marginHorizontal: 10 }}
            trackHeight={10}
            slideOnTap
          />
        </View>
      </View>
      <Button label="Back" onPress={() => ""} />
    </View>
  );
};

export default TimerSettingsScreen;
