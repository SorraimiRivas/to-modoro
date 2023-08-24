import React, { FC } from "react";
import { Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";
import { RootStackParams } from "../../../navigation/Stack";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

type Props = StackNavigationProp<RootStackParams>;

const SettingsButton: FC = () => {
  const navigation = useNavigation<Props>();
  return (
    <Pressable onPress={() => navigation.navigate("Settings")} className="mr-4">
      <Octicons name="gear" size={30} color="black" />
    </Pressable>
  );
};

export default SettingsButton;
