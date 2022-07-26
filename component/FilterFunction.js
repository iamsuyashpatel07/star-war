import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function FilterFunction() {
  return (
    <View style={styles.bottomsheet}>
      <Text> Filter </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomsheet: {
    backgroundColor: "white",
    height: windowHeight / 3,
    alignItems: "center",
    justifyContent: "center",
    fontSize: "bold",
  },
});
