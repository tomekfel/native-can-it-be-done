import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
  StyleSheet,
} from 'react-native';

import { SharedElement } from 'react-navigation-shared-element';

const SPACING = 15;
const POSTS = [
  {
    id: 'a',
    title: 'title',
    description: 'description',
    price: 123,
    image: require('../../../assets/splash.png'),
  },
];

export default ListScreen = ({ navigation }) => {
  const POST_GUTTER_WIDTH = 2;
  const dimensions = useWindowDimensions();
  const imageWidth = dimensions.width / 2 - POST_GUTTER_WIDTH;

  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.wrapper}>
        <Text style={styles.listHeader}>Marketplace</Text>

        <View style={styles.posts}>
          {POSTS.map((post, index) => (
            <Pressable
              key={post.id}
              onPress={() =>
                navigation.push('Detail', {
                  post,
                })
              }
              style={{
                width: imageWidth,
              }}
            >
              <SharedElement id={post.id}>
                <Image
                  source={post.image}
                  style={{
                    height: 180,
                    width: imageWidth,
                    marginRight: index % 2 === 1 ? 0 : POST_GUTTER_WIDTH,
                    marginLeft: index % 2 === 1 ? POST_GUTTER_WIDTH : 0,
                  }}
                />
              </SharedElement>

              <View style={styles.postTexts}>
                <Text numberOfLines={1} style={styles.postHeader}>
                  €{post.price} · {post.title}
                </Text>

                <Text numberOfLines={1} style={styles.postDescription}>
                  {post.description}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  listHeader: {
    fontSize: 28,
    fontWeight: '800',
    margin: SPACING,
  },
  posts: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  postTexts: {
    margin: 10,
    marginBottom: 15,
  },
  postHeader: {
    fontWeight: '600',
  },
  postDescription: {
    color: 'gray',
  },
});
