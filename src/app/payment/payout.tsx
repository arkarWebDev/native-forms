import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/custom-button";

const PayoutScreen = () => {
  const onNext = () => {
    router.push("/payment/summary");
  };
  return (
    <View style={styles.container}>
      <Text>PayoutScreen</Text>
      <CustomButton
        style={styles.button}
        title="Go to summary"
        onPress={onNext}
      />
    </View>
  );
};

export default PayoutScreen;

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
