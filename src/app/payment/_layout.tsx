import { Stack } from "expo-router";
import React from "react";
import { SummaryProvider } from "../../contexts/SummaryProvider";

const PaymentLayout = () => {
  return (
    <SummaryProvider>
      <Stack>
        <Stack.Screen name="personal" options={{ title: "Personal" }} />
        <Stack.Screen name="payout" options={{ title: "Payout" }} />
        <Stack.Screen name="summary" options={{ title: "Summary" }} />
      </Stack>
    </SummaryProvider>
  );
};

export default PaymentLayout;
