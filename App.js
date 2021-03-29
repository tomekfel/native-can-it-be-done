import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Initial from './src/Initial';
import RevolutCharts from './src/RevolutCharts';
import FacebookMarketplace from './src/FacebookMarketplace';
import FlatListAnimated from './src/FlatListAnimated';

export default function App() {
  return (
    <View style={styles.container}>
      <RevolutCharts />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
