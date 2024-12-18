import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import CustomButton from "../../components/custom-button";
import CustomInput from "../../components/custom-input";
import {
  useForm,
  SubmitHandler,
  Controller,
  FormProvider,
} from "react-hook-form";
const PersonalScreen = () => {
  const form = useForm();

  console.log("Form Errors", form.formState.errors);
  const onNext: SubmitHandler<any> = (data) => {
    console.log(data);

    // validate
    router.push("/payment/payout");
  };

  return (
    <View style={styles.container}>
      <FormProvider {...form}>
        {/* <Controller
        control={control}
        name="fullname"
        render={({ field: { onChange, onBlur, value } }) => (
          <CustomInput
            label="Fullname"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        rules={{ required: "Fullname is required" }}
      /> */}
        <CustomInput label="Fullname" name="fullname" />
        <CustomInput label="Address" name="address" />
        <View style={{ flexDirection: "row", gap: 5 }}>
          <CustomInput label="City" style={{ flex: 1 }} name="city" />
          <CustomInput
            label="Postal Code"
            style={{ flex: 1 }}
            name="postalcode"
          />
        </View>
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
