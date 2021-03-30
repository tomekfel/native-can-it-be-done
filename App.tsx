import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';

import { Routes, StyleGuide, cardAssets } from './src/components';
import LoadAssets from './src/components/LoadAssets';
import Examples, { assets as examplesAssets } from './src/Examples';
import Transitions from './src/Transitions';
import Animations from './src/Animations';
import Gestures from './src/Gestures';
import SVGAnimations from './src/SVGAnimations';
import HeartOfTheMatter from './src/HeartOfTheMatter';

import ChromeTabs from './src/ChromeTabs'
import FacebookMarketplace from './src/FacebookMarketplace'
import FlatListAnimated from './src/FlatListAnimated'
import RevolutCharts from './src/RevolutCharts'
import Wallet from './src/Wallet'

enableScreens();

const fonts = {
  'SFProText-Bold': require('./assets/fonts/SF-Pro-Text-Bold.otf'),
  'SFProText-Semibold': require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
  'SFProText-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
};

const assets = [...cardAssets /*...examplesAssets*/];

const Stack = createStackNavigator<Routes>();

const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: StyleGuide.palette.primary,
        borderBottomWidth: 0,
      },
      headerTintColor: 'white',
    }}
  >
    <Stack.Screen
      name='Examples'
      component={Examples}
      options={{
        title: 'Gestures & Animations',
      }}
    />
    <Stack.Screen
      name='HeartOfTheMatter'
      component={HeartOfTheMatter}
      options={{
        title: 'The Heart of the Matter',
      }}
    />
    <Stack.Screen
      name='Transitions'
      component={Transitions}
      options={{
        title: 'Transitions',
      }}
    />
    <Stack.Screen
      name='Animations'
      component={Animations}
      options={{
        title: 'Animations',
      }}
    />
    <Stack.Screen
      name='Gestures'
      component={Gestures}
      options={{
        title: 'Gestures',
      }}
    />
    <Stack.Screen
      name='SVGAnimations'
      component={SVGAnimations}
      options={{
        title: 'SVG Animations',
      }}
    />
    <Stack.Screen
      name='ChromeTabs'
      component={ChromeTabs}
      options={{
        title: 'Chrome Tabs',
      }}
    />
    <Stack.Screen
      name='FacebookMarketplace'
      component={FacebookMarketplace}
      options={{
        title: 'Facebook Marketplace',
      }}
    />
    <Stack.Screen
      name='FlatListAnimated'
      component={FlatListAnimated}
      options={{
        title: 'FlatList Animated',
      }}
    />
    <Stack.Screen
      name='RevolutCharts'
      component={RevolutCharts}
      options={{
        title: 'Revolut Charts',
      }}
    />
    <Stack.Screen
      name='Wallet'
      component={Wallet}
      options={{
        title: 'Wallet',
      }}
    />
  </Stack.Navigator>
);

const App = () => (
  <LoadAssets {...{ fonts, assets }}>
    <StatusBar barStyle='light-content' />
    <AppNavigator />
  </LoadAssets>
);

export default App;
