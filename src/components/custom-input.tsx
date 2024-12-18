import React from "react";
import { useController } from "react-hook-form";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from "react-native";

type CustomInputProps = {
  label: string;
  style?: StyleProp<ViewStyle>;
  name: string;
} & TextInputProps;
const CustomInput = ({
  label,
  style,
  name,
  ...textInputProps
}: CustomInputProps) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
  } = useController({ name });
  // const error = { message: undefined };

  return (
    <View style={style}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[styles.input, error?.message && styles.errorInput]}
        {...textInputProps}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
      />
      <Text style={styles.error}>{error?.message}</Text>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "slategrey",
    borderRadius: 5,
    padding: 10,
    marginTop: 4,
    marginBottom: 2,
  },
  errorInput: {
    borderColor: "red",
  },
  label: {
    fontWeight: 600,
    color: "gray",
  },
  error: {
    color: "red",
    height: 17,
  },
});
