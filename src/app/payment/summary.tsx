import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/custom-button";

const SummaryScreen = () => {
  const onNext = () => {
    router.dismissAll();
    router.back();
  };

  return (
    <View style={styles.container}>
      <Text>SummaryScreen</Text>
      <CustomButton title="Go back" onPress={onNext} style={styles.button} />
    </View>
  );
};

export default SummaryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  button: {
    marginTop: "auto",
    marginBottom: 20,
  },
});
