import React from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Animated,
  TextInput,
  Text,
} from 'react-native';
// import { Svg } from 'expo';
import * as Svg from 'react-native-svg';
import * as path from 'svg-path-properties';
import * as shape from 'd3-shape';

import { scaleTime, scaleLinear, scaleQuantile } from 'd3-scale';

const { Path, Defs, LinearGradient, Stop } = Svg;
const d3 = {
  shape,
};

const height = 200;
const { width } = Dimensions.get('window');
const verticalPadding = 5;
const cursorRadius = 10;
const labelWidth = 100;

const data = [
  { x: new Date(2018, 9, 1), y: 0 },
  { x: new Date(2018, 9, 16), y: 0 },
  { x: new Date(2018, 9, 17), y: 200 },
  { x: new Date(2018, 10, 1), y: 200 },
  { x: new Date(2018, 10, 2), y: 300 },
  { x: new Date(2018, 10, 5), y: 300 },
];

export default class RevolutCharts extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          <Text>Revolut Charts</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    marginTop: 60,
    height,
    width,
  },
  cursor: {
    width: cursorRadius * 2,
    height: cursorRadius * 2,
    borderRadius: cursorRadius,
    borderColor: '#367be2',
    borderWidth: 3,
    backgroundColor: 'white',
  },
  label: {
    position: 'absolute',
    top: -45,
    left: 0,
    backgroundColor: 'lightgray',
    width: labelWidth,
  },
});
