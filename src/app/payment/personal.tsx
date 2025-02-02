import { router } from "expo-router";
import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/custom-button";
import CustomInput from "../../components/custom-input";
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Personal, PersonalSchema } from "../../types/personal-schema";
import { useSummary } from "../../contexts/SummaryProvider";
import CustomPicker from "../../components/custom-picker";
import CustomDateTimePicker from "../../components/custom-datetime-picker";

const PersonalScreen = () => {
  const { setPersonalInfo, personalInfo } = useSummary();

  const form = useForm<Personal>({
    resolver: zodResolver(PersonalSchema),
    defaultValues: personalInfo,
  });

  // console.log("Form Errors", form.formState.errors);
  const onNext: SubmitHandler<Personal> = (data) => {
    // console.log(data);
    setPersonalInfo(data);
    // validate
    router.push("/payment/payout");
  };

  return (
    <View style={styles.container}>
      <FormProvider {...form}>
        <CustomInput label="Fullname" name="fullname" />
        <CustomDateTimePicker name="dateOfBirth" label="Date of birth" />
        <CustomInput label="Address" name="address" />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomInput label="City" style={{ flex: 1 }} name="city" />
          <CustomInput
            label="Postal Code"
            style={{ flex: 1 }}
            name="postalcode"
          />
        </View>
        <CustomPicker
          label="Country"
          name="country"
          items={[
            { label: "Myanmar", value: "myanmar" },
            { label: "Thailand", value: "thailand" },
            { label: "China", value: "china" },
            { label: "India", value: "india" },
            { label: "Indonesia", value: "indonesia" },
          ]}
        />
        <CustomInput label="Phone number" inputMode="tel" name="phonenumber" />
        <CustomButton
          title="Go to payout"
          onPress={form.handleSubmit(onNext)}
          style={styles.button}
        />
      </FormProvider>
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
