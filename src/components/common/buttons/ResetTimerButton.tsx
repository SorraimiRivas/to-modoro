import { FC } from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress: () => void;
};

const ResetTimerButton: FC<Props> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name="refresh-circle" size={24} color="#00e0ff" />
    </Pressable>
  );
};

export default ResetTimerButton;
