import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import List from "./component/List";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function App() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={["#D16BA5", "#86A8E7", "#5FFBF1"]}
      style={styles.linearGradient}
    >
      <StatusBar />
      <View style={styles.list}>
        <List />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    height: windowHeight,
    width: windowWidth,
  },
  list: {
    paddingTop: windowHeight / 8,
    paddingBottom: windowHeight / 16,
  },
});
