import React from "react";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParams } from "../../../navigation/Stack";
import { useNavigation } from "@react-navigation/native";

type NavType = StackNavigationProp<RootStackParams>;

const GoBackButton = () => {
  const navigation = useNavigation<NavType>();
  return (
    <Pressable onPress={() => navigation.goBack()} className="ml-2">
      <Ionicons name="ios-arrow-back" size={30} />
    </Pressable>
  );
};

export default GoBackButton;
