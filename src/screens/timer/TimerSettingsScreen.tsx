import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/Stack";
import { useGlobalContext } from "../../context/GlobalContext";
import CustomPicker from "../../components/CustomPicker";

type Status = "1" | "2" | "3" | "4" | "5" | "6";
type Mode = "Classic" | "Custom";
type IsActive = "Focus" | "Break" | "Long Break" | null;
export type Props = {
  navigation: StackNavigationProp<RootStackParams>;
};

const TimerSettingsScreen: FC = () => {
  const [selectedMode, setSelectedMode] = useState<Mode>("Classic");
  const [checkedFocus, setCheckedFocus] = useState<Status>("1");
  const [checkedBreak, setCheckedBreak] = useState<Status>("4");
  const [isActive, setIsActive] = useState<IsActive>(null);

  const {
    focusTime,
    breakTime,
    longBreak,
    setLongBreak,
    setFocusTime,
    setBreakTime,
  } = useGlobalContext();

  const handleOpenDropDown = (name: IsActive) => {
    setIsActive(name);
  };

  const handleCloseDropDown = () => {
    setIsActive(null);
  };

  return (
    <View className="flex-1 items-center">
      {/* <View className="flex-row justify-around">
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
      </View> */}
      {/* <View className="my-10 flex-row justify-between">
        <View>
          <Text
            className={`${
              selectedMode == "Classic" ? "text-black" : "text-gray-400"
            } mb-1`}
          >
            Focus Time
          </Text>
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="25:00 Minutes"
            status={checkedFocus == "1" ? "checked" : "unchecked"}
            onPress={() => {
              setCheckedFocus("1");
              setFocusTime(25);
            }}
          />
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="30:00 Minutes"
            status={checkedFocus == "2" ? "checked" : "unchecked"}
            onPress={() => {
              setCheckedFocus("2");
              setFocusTime(30);
            }}
          />
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="90:00 Minutes"
            status={checkedFocus == "3" ? "checked" : "unchecked"}
            onPress={() => {
              setCheckedFocus("3");
              setFocusTime(90);
            }}
          />
        </View>
        <View className="">
          <Text
            className={`${
              selectedMode == "Classic" ? "text-black" : "text-gray-400"
            } mb-1`}
          >
            Break Time
          </Text>
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="05:00 Minutes"
            status={checkedBreak == "4" ? "checked" : "unchecked"}
            onPress={() => {
              setCheckedBreak("4");
              setBreakTime(5);
            }}
          />
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="10:00 Minutes"
            status={checkedBreak == "5" ? "checked" : "unchecked"}
            onPress={() => {
              setCheckedBreak("5");
              setBreakTime(10);
            }}
          />
          <RadioButton
            disabled={selectedMode == "Custom" ? true : false}
            label="15:00 Minutes"
            status={checkedBreak == "6" ? "checked" : "unchecked"}
            onPress={() => {
              setCheckedBreak("6");
              setBreakTime(15);
            }}
          />
        </View>
      </View>
      <View className="">
        <View className="mb-4">
          <Text
            className={`${
              selectedMode == "Custom" ? "text-black" : "text-gray-400"
            } text-base `}
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
            } text-base`}
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
      </View> */}
      <CustomPicker
        value={focusTime}
        title="Focus"
        isOpen={isActive == "Focus" ? true : false}
        onPress={
          isActive == "Focus"
            ? handleCloseDropDown
            : () => handleOpenDropDown("Focus")
        }
      />
      <CustomPicker
        value={breakTime}
        title="Break"
        isOpen={isActive == "Break" ? true : false}
        onPress={
          isActive == "Break"
            ? handleCloseDropDown
            : () => handleOpenDropDown("Break")
        }
      />
      <CustomPicker
        value={longBreak}
        title="Long Break"
        isOpen={isActive == "Long Break" ? true : false}
        onPress={
          isActive == "Long Break"
            ? handleCloseDropDown
            : () => handleOpenDropDown("Long Break")
        }
      />
    </View>
  );
};

export default TimerSettingsScreen;
