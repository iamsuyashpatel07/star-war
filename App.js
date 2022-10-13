import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Pressable,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Bar2 from "./component/Bar2";
import { List, FilterFunction } from "./component/List";
import Filter from "./icon/Filter";
import Moon from "./icon/Moon";
import Magnifying from "./icon/Magnifying";
import Sun from "./icon/Sun";
import { BottomSheet } from "react-native-btr";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const [number, onChangeNumber] = useState("");
  const [themeColor, setThemeColor] = useState(["#E78786", "#BD1DD8"]);
  const [theme, setTheme] = useState(true);
  const [searchBox, setSearchBox] = useState(false);
  const [visible, setVisible] = useState(false);

  function ChangeTheme() {
    if (theme === true) {
      setTheme(false);
      setThemeColor(["#D16BA5", "#86A8E7", "#5FFBF1"]);
    } else {
      setTheme(true);
      setThemeColor(["#E78786", "#BD1DD8"]);
    }
  }
  function toggleBottomNavigationView() {
    if (visible === false) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }
  function searchQuery() {
    onChangeNumber("");
    if (searchBox === true) {
      setSearchBox(false);
    } else {
      setSearchBox(true);
    }
  }
  return (
    <>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={themeColor}
        style={styles.linearGradient}
      >
        <StatusBar />

        <View style={styles.list}>
          {/* header Start */}
          {!searchBox ? (
            <View style={styles.header}>
              <View>
                <Text style={{ fontSize: 22, fontWeight: "bold" }}>Planet</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Pressable onPress={ChangeTheme}>
                    {!theme ? <Sun /> : <Moon />}
                  </Pressable>
                </View>
                <Pressable onPress={searchQuery}>
                  <Magnifying />
                </Pressable>
                <View>
                  <Pressable onPress={toggleBottomNavigationView}>
                    <Filter />
                  </Pressable>
                </View>
              </View>
              {/* Header end */}
            </View>
          ) : (
            <View style={styles.header}>
              <KeyboardAvoidingView>
                <ScrollView>
                  <SafeAreaView style={styles.input}>
                    <Magnifying />
                    <TextInput
                      onChangeText={onChangeNumber}
                      value={number}
                      autoFocus={true}
                      placeholder="search"
                      keyboardType="text"
                    />
                  </SafeAreaView>
                </ScrollView>
              </KeyboardAvoidingView>
              <Pressable onPress={searchQuery}>
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>Cancel</Text>
              </Pressable>
            </View>
          )}
          <Bar2 />
          <View style={{ height: windowHeight / 1.2 }}>
            <List value={number} />
          </View>
        </View>
      </LinearGradient>
      <BottomSheet
        visible={visible}
        height={200}
        onBackButtonPress={toggleBottomNavigationView}
        onBackdropPress={toggleBottomNavigationView}
      >
        <FilterFunction setVisible={setVisible} />
      </BottomSheet>
    </>
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
  bottomsheet: {
    backgroundColor: "white",
    height: windowHeight / 3,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: windowWidth / 1.5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    padding: 10,
    flexDirection: "row",
  },
});
