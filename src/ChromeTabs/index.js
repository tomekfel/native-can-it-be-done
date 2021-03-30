import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Animated,
  Dimensions,
} from "react-native";
// import MaskedView from "@react-native-masked-view/masked-view";
import MaskedView from "@react-native-community/masked-view";

import TabBar, {
  TABBAR_HEIGHT,
  TABBAR_WIDTH,
  TAB_WIDTH,
} from "./components/TapBar";

const { height } = Dimensions.get("window");

export default class ChromeTabs extends React.Component {
  state = {
    x: new Animated.Value(0),
  };

  render() {
    const { x } = this.state;
    const translateX = x.interpolate({
      inputRange: [0, TABBAR_WIDTH],
      outputRange: [TABBAR_WIDTH - TAB_WIDTH, 0],
      extrapolate: "clamp",
    });

    return (
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle="light-content" />

        <View style={styles.container}>
          <TabBar
            color="#f8f9fa"
            backgroundColor="#828384"
            borderColor="#505152"
          />

          <MaskedView
            style={StyleSheet.absoluteFill}
            maskElement={
              <Animated.View
                style={[styles.cursor, { transform: [{ translateX }] }]}
              />
            }
          >
            <TabBar
              color="#3b4043"
              backgroundColor="#f8f9fa"
              borderColor="#f8f9fa"
            />
          </MaskedView>
          <Animated.ScrollView
            style={{ ...StyleSheet.absoluteFillObject }}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            bounces={false}
            contentContainerStyle={{ width: TABBAR_WIDTH * 2 }}
            snapToInterval={TAB_WIDTH + TAB_WIDTH / 2}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { x },
                  },
                },
              ],
              { useNativeDriver: true }
            )}
            horizontal
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#212223",
    paddingTop: StatusBar.height || 40,
  },
  container: {
    width: TABBAR_WIDTH,
    // height: TABBAR_HEIGHT,
    height: height,
    backgroundColor: "red",
  },
  cursor: {
    height: TABBAR_HEIGHT,
    width: TAB_WIDTH,
    backgroundColor: "#f8f9fa",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
