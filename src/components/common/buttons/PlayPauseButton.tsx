import { TouchableOpacity, StyleSheet } from "react-native";
import React, { FC } from "react";
import { AntDesign } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
  isTimeRunning: boolean;
};

const PlayPauseButton: FC<Props> = ({ onPress, isTimeRunning }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AntDesign
        name={isTimeRunning ? "pausecircleo" : "playcircleo"}
        size={120}
        color="black"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
  },
});

export default PlayPauseButton;
