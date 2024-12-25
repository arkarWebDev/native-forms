import { Link, useSegments } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const steps = [
  {
    key: "personal",
    label: "Personal",
  },
  { key: "payout", label: "Payout" },
  { key: "summary", label: "Order" },
];
const StepIndicator = () => {
  const segements = useSegments();
  const currentScreen = segements[segements.length - 1];

  const currentStepIndex = steps.findIndex(
    (step) => step.key === currentScreen
  );
  return (
    <SafeAreaView
      edges={["top"]}
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        height: 90,
        backgroundColor: "#fff",
        gap: 15,
      }}
    >
      {steps.map((step, index) => (
        <View
          key={index}
          style={{
            borderBottomWidth: 3,
            flex: 1,
            borderColor: currentStepIndex >= index ? "#000" : "#ccc",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              textAlign: "center",
              color: currentStepIndex >= index ? "#000" : "gray",
            }}
          >
            {step.label}
          </Text>
        </View>
      ))}
    </SafeAreaView>
  );
};

export default StepIndicator;
