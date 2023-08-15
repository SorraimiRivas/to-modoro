import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

type Props = {
  label: string;
  onPress: () => void | null;
  disabled: boolean;
  status: string;
  textColor?: string;
};

const RadioButton: FC<Props> = ({
  label,
  onPress,
  disabled,
  status,
  textColor,
}) => {
  const labelColor: string | undefined = disabled
    ? "text-gray-400"
    : status == "checked"
    ? textColor
    : "text-gray-400";

  return (
    <View className="flex-row gap-1">
      <View>
        <TouchableOpacity
          activeOpacity={disabled ? 1 : 0.5}
          onPress={disabled ? () => {} : onPress}
        >
          {status == "checked" && (
            <FontAwesome5
              name="dot-circle"
              size={24}
              color={disabled ? "grey" : "blue"}
            />
          )}
          {status == "unchecked" && (
            <FontAwesome5
              name="circle"
              size={24}
              color={disabled ? "grey" : "blue"}
            />
          )}
        </TouchableOpacity>
      </View>
      <View className="justify-center">
        <Text className={`${labelColor}`}>{label}</Text>
      </View>
    </View>
  );
};

export default RadioButton;
