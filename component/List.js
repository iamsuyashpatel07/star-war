import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Dimensions,
  Pressable,
} from "react-native";
import Planet from "../api/Planets.json";
import LinearGradient from "react-native-linear-gradient";
import Sun from "../icon/Sun";
import People from "../icon/People";
import Terrain from "../icon/Terrain";
import DropDownPicker from "react-native-dropdown-picker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}
let DATA = Planet.results;
let renderItem;

const Item = ({ item }) => (
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    colors={["#9400D3", "#86A8F4"]}
    style={styles.item}
  >
    <View>
      <Text style={styles.title}>{item.name}</Text>
      <Text
        style={{
          fontSize: 13,
          color: "white",
          fontStyle: "italic",
        }}
      >
        {item.terrain}
      </Text>
    </View>
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 8,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Terrain />
        <Text style={styles.detail}>{item.residents.length}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Sun />
        <Text style={styles.detail}>{item.climate}</Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <People />
        <Text style={styles.detail}>{nFormatter(item.population, 1)}</Text>
      </View>
    </View>
  </LinearGradient>
);

renderItem = ({ item }) => <Item item={item} />;

export const FilterFunction = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  let climate = [];
  Planet.results.forEach((item) =>
    climate.push({ label: item.climate, value: item.climate })
  );
  let filterClimate = climate.filter((obj, index, arr) => {
    return arr.map((mapObj) => mapObj.label).indexOf(obj.label) == index;
  });
  const [items, setItems] = useState(filterClimate);

  function filterData() {
    console.log(value);
    if (value !== null) {
      DATA = Planet.results.filter((item) => item.climate === value);
      renderItem = ({ item }) => <Item item={item} />;
    }
  }
  return (
    <View style={styles.bottomsheet}>
      <View style={{ width: windowWidth / 1.2 }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          theme="DARK"
        />
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "gray",
            margin: 10,
            border: 1,
            borderColor: "black",
            borderRadius: 10,
            alignSelf: "center",
          }}
          onPress={() => filterData()}
        >
          <Text style={{ color: "skyblue", fontSize: 15, textAlign: "center" }}>
            Filter
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export const List = ({ value }) => {
  if (value !== "") {
    DATA = Planet.results.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    renderItem = ({ item }) => <Item item={item} />;
  }
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
  },
  detail: {
    fontSize: 15,
    color: "white",
    fontStyle: "italic",
  },
  bottomsheet: {
    backgroundColor: "white",
    height: windowHeight / 3,
    alignItems: "center",
    justifyContent: "center",
    fontSize: "bold",
  },
});
