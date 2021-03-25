import React, { Component } from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import DetailScreen from './DetailScreen';
import ListScreen from './ListScreen';

export class MainScreen extends Component {
  render() {
    const Stack = createSharedElementStackNavigator();

    return (
      <Stack.Navigator mode='modal' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='List' component={ListScreen} />

        <Stack.Screen
          name='Detail'
          component={DetailScreen}
          sharedElements={(route) => {
            return [route.params.post.id];
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default MainScreen;
