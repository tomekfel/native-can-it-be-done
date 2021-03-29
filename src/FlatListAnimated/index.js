import * as React from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
const { width, height } = Dimensions.get('screen');
// import faker from 'faker';
import axios from 'axios';

// faker.seed(10);

// const DATA = [...Array(30).keys()].map((_, i) => {
//   return {
//     key: faker.random.uuid(),
//     image: `https://randomuser.me/api/portraits/${faker.helpers.randomize([
//       'women',
//       'men',
//     ])}/${faker.random.number(60)}.jpg`,
//     name: faker.name.findName(),
//     jobTitle: faker.name.jobTitle(),
//     email: faker.internet.email(),
//   };
// });

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + 3.15 * SPACING;

const FlatListAnimated = () => {
  const [posts, setPosts] = React.useState();

  const getPosts = async () => {
    const { data } = await axios.get(
      `https://beatporttopcharts.com/php/api/movie/search.php?s=&l=1&c=14&rating_count=1000,MAX`
    );
    setPosts(data.records);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image
        source={{
          uri:
            'https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      <Animated.FlatList
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        data={posts}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.imdb_link}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <Animated.View
              style={{
                flexDirection: 'row',
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: 'rgba(255,255,255,0.9)',
                borderRadius: 12,
                opacity,
                transform: [{ scale }],
              }}
              elevation={5}
            >
              <Image
                style={{
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE,
                  borderRadius: AVATAR_SIZE,
                  marginRight: SPACING / 2,
                  //   marginBottom: AVATAR_SIZE,
                }}
                source={{
                  uri: item.imdb_image_url,
                }}
              />
              <View>
                <Text
                  style={{ fontSize: 20, fontWeight: '700', maxWidth: 200 }}
                >
                  {item.imdb_title}
                </Text>
                <Text style={{ fontSize: 18, opacity: 0.7 }}>
                  {item.imdb_user_rating}
                </Text>
                <Text style={{ fontSize: 14, opacity: 0.8, color: '#0099cc' }}>
                  {item.imdb_duration}
                </Text>
              </View>
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

export default FlatListAnimated;
