import { View, Text } from "react-native";
import React, { useState } from "react";

const FOCUS_TIME: number = 25 * 60 * 1000;
const BREAK_TIME: number = 5 * 60 * 1000;

const useSetTime = () => {
  const [focusTime, setFocusTime] = useState<number>(FOCUS_TIME);
  const [breakTime, setBreakTime] = useState<number>(BREAK_TIME);

  return { focusTime, breakTime, setFocusTime, setBreakTime };
};

export default useSetTime;
