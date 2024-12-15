import { Redirect } from "expo-router";
import React from "react";

const PaymentScreen = () => {
  return <Redirect href={"/payment/personal"} />;
};

export default PaymentScreen;
