import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/custom-button";
import { router } from "expo-router";

const IndexPage = () => {
  return (
    <View style={styles.container}>
      <CustomButton
        title="Go to native-form"
        onPress={() => router.push("/payment")}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default IndexPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
