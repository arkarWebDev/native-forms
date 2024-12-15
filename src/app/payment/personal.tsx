import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const PersonalScreen = () => {
  const onNext = () => {
    // validate

    router.push("/payment/payout");
  };
  return (
    <View style={styles.container}>
      <Text>PersonalScreen</Text>
      <Pressable style={styles.button} onPress={onNext}>
        <Text style={styles.text}>Go to Payout</Text>
      </Pressable>
    </View>
  );
};

export default PersonalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 20,
    marginTop: "auto",
    marginBottom: 20,
  },
  text: {
    color: "#fff",
    fontWeight: 600,
  },
});
