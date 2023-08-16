import { View, Text } from "react-native";
import React, { useState } from "react";

const useSetTime = () => {
  const [focusTime, setFocusTime] = useState<number>(0);
  const [breakTime, setBreakTime] = useState<number>(0);

  return { focusTime, breakTime, setFocusTime, setBreakTime };
};

export default useSetTime;
