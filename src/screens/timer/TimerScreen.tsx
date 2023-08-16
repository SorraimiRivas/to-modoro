import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import TimerModeText from "../../components/TimerModeText";
import TimerDisplay from "../../components/TimerDisplay";
import PlayPauseButton from "../../components/common/buttons/PlayPauseButton";
import useSetTime from "../../hooks/useSetTime";
import TimerSettingsScreen from "./TimerSettingsScreen";

export type TimerMode = "Focus" | "Break";

const FOCUS_TIME = 60 * 1000;
const BREAK_TIME = 60 * 1000;

const TimerScreen = () => {
  const [timer, setTimer] = useState<number>(25 * FOCUS_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<TimerMode>("Focus");
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const { focusTime, breakTime } = useSetTime();

  const startTimer = () => {
    setIsTimeRunning(!isTimeRunning);
    const id = setInterval(() => setTimer((prev) => prev - 1000), 1000);
    setIntervalId(id);
  };

  const clearTimer = () => {
    setIsTimeRunning(!isTimeRunning);
    if (intervalId) {
      clearInterval(intervalId);
    }
    setIntervalId(null);
  };

  useEffect(() => {
    if (timer === 0) {
      if (timerMode == "Focus") {
        setTimerMode("Break");
        setTimer(breakTime * BREAK_TIME);
      } else {
        setTimerMode("Focus");
        setTimer(focusTime * FOCUS_TIME);
      }
      clearTimer();
    }
  }, [timer]);

  return (
    <View className="align-middle justify-center">
      <TimerModeText timerMode={timerMode} />
      <TimerDisplay time={new Date(timer)} />
      <PlayPauseButton
        onPress={isTimeRunning ? clearTimer : startTimer}
        isTimeRunning={isTimeRunning}
      />
    </View>
  );
};

export default TimerScreen;
