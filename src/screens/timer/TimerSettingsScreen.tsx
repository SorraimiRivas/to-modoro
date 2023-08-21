import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { FC, useEffect } from "react";
import Chip from "../../components/common/chips/Chip";
import RadioButton from "../../components/common/buttons/RadioButton";
import { Slider } from "@react-native-assets/slider";
import Button from "../../components/common/buttons/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/Stack";
import { useGlobalContext } from "../../context/GlobalContext";

type Status = "1" | "2" | "3" | "4" | "5" | "6";
type Mode = "Classic" | "Custom";
export type Props = {
  navigation: StackNavigationProp<RootStackParams>;
};

const TimerSettingsScreen: FC<Props> = ({ navigation }) => {
  const [selectedMode, setSelectedMode] = React.useState<Mode>("Classic");
  const [checkedFocus, setCheckedFocus] = React.useState<Status>("1");
  const [checkedBreak, setCheckedBreak] = React.useState<Status>("4");
  const { focusTime, breakTime, setFocusTime, setBreakTime } =
    useGlobalContext();

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
      </View>
      <Button label="Go Back" onPress={() => navigation.navigate("Timer")} />
    </View>
  );
};

export default TimerSettingsScreen;
