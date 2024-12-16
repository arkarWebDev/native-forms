import { Link } from "expo-router";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";

type CustomButton = {
  title: string;
  style?: StyleProp<ViewStyle>;
} & PressableProps;
const CustomButton = ({ title, style, ...pressableProps }: CustomButton) => {
  return (
    <View style={style}>
      <Pressable style={styles.button} {...pressableProps}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 18,
    borderRadius: 20,
    width: "100%",
  },
  text: {
    color: "#fff",
    fontWeight: 600,
    fontSize: 18,
  },
});
