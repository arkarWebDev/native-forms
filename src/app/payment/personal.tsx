import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/custom-button";

const PersonalScreen = () => {
  const onNext = () => {
    // validate

    router.push("/payment/payout");
  };
  return (
    <View style={styles.container}>
      <Text>PersonalScreen</Text>
      <CustomButton
        title="Go to payout"
        onPress={onNext}
        style={styles.button}
      />
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
    marginTop: "auto",
    marginBottom: 20,
  },
});
