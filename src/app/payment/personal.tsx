import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/custom-button";
import CustomInput from "../../components/custom-input";

const PersonalScreen = () => {
  const onNext = () => {
    // validate
    router.push("/payment/payout");
  };
  return (
    <View style={styles.container}>
      <CustomInput label="Fullname" />
      <CustomInput label="Address" />
      <View style={{ flexDirection: "row", gap: 5 }}>
        <CustomInput label="City" style={{ flex: 1 }} />
        <CustomInput label="Postal Code" style={{ flex: 1 }} />
      </View>
      <CustomInput label="Phone number" inputMode="tel" />
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
