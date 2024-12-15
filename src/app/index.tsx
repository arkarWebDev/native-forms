import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

const IndexPage = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Pressable style={styles.button}>
        <Link href="/payment" asChild>
          <Text style={styles.text}>Go to Forms</Text>
        </Link>
      </Pressable>
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
  button: {
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 10,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    fontWeight: 600,
  },
});
