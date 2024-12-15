import { Stack } from "expo-router";
import React from "react";

const PaymentLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="personal" options={{ title: "Personal" }} />
      <Stack.Screen name="payout" options={{ title: "Payout" }} />
      <Stack.Screen name="summary" options={{ title: "Summary" }} />
    </Stack>
  );
};

export default PaymentLayout;
