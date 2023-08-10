import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import PlayPauseButton from "../../components/common/buttons/PlayPauseButton";
import TimerDisplay from "../../components/TimerDisplay";

export type TimerMode = "Focus" | "Break";

const FOCUS_TIME = 0.2 * 60 * 1000;
const BREAK_TIME = 0.1 * 60 * 1000;

const HomeScreen = () => {
  const [timer, setTimer] = useState<number>(FOCUS_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<TimerMode>("Focus");
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

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
        setTimer(BREAK_TIME);
        setTimerMode("Focus");
        setTimer(FOCUS_TIME);
      }
      clearTimer();
    }
  }, [timer]);

  return (
    <View>
      <TimerDisplay time={new Date(timer)} />
      <PlayPauseButton
        onPress={isTimeRunning ? clearTimer : startTimer}
        isTimeRunning={isTimeRunning}
      />
    </View>
  );
};

export default HomeScreen;
