import React, { ComponentProps } from "react";
import { useController } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

type CustomPickerProps = {
  label: string;
  name: string;
} & Omit<ComponentProps<typeof RNPickerSelect>, "onValueChange">;
const CustomPicker = ({ label, name, ...pickerProps }: CustomPickerProps) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name });

  return (
    <View>
      {label && <Text style={[styles.label]}>{label}</Text>}
      <RNPickerSelect
        {...pickerProps}
        onValueChange={onChange}
        value={value}
        onClose={onBlur}
        useNativeAndroidPickerStyle={false}
        placeholder={{ label: "Select your country", value: null }}
        style={{
          inputAndroid: {
            width: "100%",
            borderWidth: 1,
            borderColor: error ? "red" : "slategrey",
            borderRadius: 5,
            padding: 10,
            marginTop: 4,
            marginBottom: 2,
          },
          inputIOS: {
            width: "100%",
            borderWidth: 1,
            borderColor: error ? "red" : "slategrey",
            borderRadius: 5,
            padding: 10,
            marginTop: 4,
            marginBottom: 2,
          },
        }}
      />
      <Text style={styles.error}>{error?.message}</Text>
    </View>
  );
};

export default CustomPicker;

const styles = StyleSheet.create({
  label: {
    fontWeight: 600,
    color: "gray",
  },
  error: {
    color: "red",
    height: 17,
  },
});
