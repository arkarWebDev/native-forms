import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CustomButton from "../../components/custom-button";
import CustomInput from "../../components/custom-input";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PayoutSchema } from "../../types/payout-schema";
import * as z from "zod";

type Payout = z.infer<typeof PayoutSchema>;
const PayoutScreen = () => {
  const form = useForm<Payout>({
    resolver: zodResolver(PayoutSchema),
  });
  const onNext: SubmitHandler<Payout> = () => {
    router.push("/payment/summary");
  };
  return (
    <View style={styles.container}>
      <FormProvider {...form}>
        <CustomInput
          name="cardnumber"
          label="Card number"
          inputMode="numeric"
        />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomInput
            name="expiry"
            label="Expiry date"
            style={{ flex: 1 }}
            inputMode="numeric"
          />
          <CustomInput
            name="cvv"
            label="CVV"
            style={{ flex: 1 }}
            inputMode="numeric"
          />
        </View>
        <CustomButton
          style={styles.button}
          title="Go to summary"
          onPress={form.handleSubmit(onNext)}
        />
      </FormProvider>
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
