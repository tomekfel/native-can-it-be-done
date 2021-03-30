import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import MainScreen from "./components/MainScreen";

export default function FacebookMarketplace() {
  return (
    <SafeAreaProvider>
      <NavigationContainer independent={true}>
        <MainScreen />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
