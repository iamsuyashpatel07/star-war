import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import { LinearGradient } from 'expo-linear-gradient';
import Sun from '../icon/Sun';
import People from '../icon/People';
import Terrain from '../icon/Terrain';
import Info from '../icon/Info';
export default function Bar2() {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={['#9400D3', '#86A8F4']}
      style={styles.item}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <View>
          <Info />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Terrain />
          <Text style={styles.detail}>Residents</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Sun />
          <Text style={styles.detail}>Climate</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <People />
          <Text style={styles.detail}>Population</Text>
        </View>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 6,
    justifyContent: 'center',
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    fontStyle: 'italic',
  },
  detail: {
    fontSize: 15,
    color: 'white',
    fontStyle: 'italic',
  },
});
