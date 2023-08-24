import { View } from "react-native";
import React, { FC, useEffect, useState } from "react";
import TimerModeText from "../../components/TimerModeText";
import TimerDisplay from "../../components/TimerDisplay";
import PlayPauseButton from "../../components/common/buttons/PlayPauseButton";
import { RootStackParams } from "../../navigation/Stack";
import { useGlobalContext } from "../../context/GlobalContext";
import { StackNavigationProp } from "@react-navigation/stack";

export type TimerMode = "Focus" | "Break";

export type Props = {
  navigation: StackNavigationProp<RootStackParams>;
};

const FOCUS_TIME = 60;
const BREAK_TIME = 60;

const TimerScreen: FC<Props> = ({ navigation }) => {
  const { focusTime, breakTime } = useGlobalContext();
  const [timer, setTimer] = useState<number>(focusTime * FOCUS_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState<boolean>(false);
  const [timerMode, setTimerMode] = useState<TimerMode>("Focus");
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

  const startTimer = () => {
    setIsTimeRunning(!isTimeRunning);
    const id = setInterval(() => setTimer((prev) => prev! - 1), 1000);
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
    <View className="flex-1 bg-white justify-center">
      <View>
        <TimerModeText timerMode={timerMode} />
      </View>
      <View>
        <TimerDisplay time={timer} />
      </View>
      <View>
        <PlayPauseButton
          onPress={isTimeRunning ? clearTimer : startTimer}
          isTimeRunning={isTimeRunning}
        />
      </View>
    </View>
  );
};

export default TimerScreen;
