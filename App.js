import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Bar2 from "./component/Bar2";
import List from "./component/List";
import Filter from "./icon/Filter";
import Moon from "./icon/Moon";
import Magnifying from "./icon/Magnifying";
import Sun from "./icon/Sun";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [themeColor, setThemeColor] = useState([
    "#D16BA5",
    "#86A8E7",
    "#5FFBF1",
  ]);
  const [theme, setTheme] = useState(true);
  function ChangeTheme() {
    if (theme === true) {
      setTheme(false);
      setThemeColor(["#D16BA5", "#86A8E7", "#5FFBF1"]);
    } else {
      setTheme(true);
      setThemeColor(["#E78786", "#BD1DD8"]);
    }
  }
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={themeColor}
      style={styles.linearGradient}
    >
      <StatusBar />
      <View style={styles.list}>
        {/* header Start */}
        <View style={styles.header}>
          <View>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Planet</Text>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Pressable onPress={ChangeTheme}>
                {!theme ? <Sun /> : <Moon />}
              </Pressable>
            </View>
            <View>
              <Magnifying />
            </View>
            <View>
              <Filter />
            </View>
          </View>
          {/* Header end */}
        </View>
        <Bar2 />
        <View style={{ height: windowHeight / 1.2 }}>
          <List />
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  header: {
    marginVertical: 5,
    marginHorizontal: 16,
    padding: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
  },
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
