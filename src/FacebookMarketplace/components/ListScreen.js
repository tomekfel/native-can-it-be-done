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

import axios from 'axios';

import { SharedElement } from 'react-navigation-shared-element';

const SPACING = 15;
const POST_GUTTER_WIDTH = 2;

const ListScreen = ({ navigation }) => {
  const [posts, setPosts] = React.useState();

  const getPosts = async () => {
    const { data } = await axios.get(
      `https://beatporttopcharts.com/php/api/movie/search.php?s=&l=1&c=7&rating_count=1,MAX`
    );
    setPosts(data.records);
  };

  React.useEffect(() => {
    getPosts();
  }, []);

  const dimensions = useWindowDimensions();
  const imageWidth = dimensions.width / 2 - POST_GUTTER_WIDTH;
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView style={styles.wrapper}>
        <Text style={styles.listHeader}>Marketplace</Text>

        <View style={styles.posts}>
          {posts &&
            posts.map((post, index) => (
              <Pressable
                key={post.imdb_link}
                onPress={() =>
                  navigation.push('Detail', {
                    post,
                  })
                }
                style={{
                  width: imageWidth,
                }}
              >
                <SharedElement id={post.imdb_link}>
                  <View
                    style={{
                      height: 180,
                      width: imageWidth,
                      flex: 1,
                      // margin: 10,
                      // marginRight: index % 2 === 1 ? 0 : POST_GUTTER_WIDTH,
                      // marginLeft: index % 2 === 1 ? POST_GUTTER_WIDTH : 0,
                    }}
                  >
                    <Image
                      source={{
                        uri: post.imdb_image_url,
                      }}
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  </View>
                </SharedElement>

                <View style={styles.postTexts}>
                  <Text numberOfLines={1} style={styles.postHeader}>
                    {post.imdb_user_rating} · {post.imdb_title}
                  </Text>

                  {/* <Text numberOfLines={1} style={styles.postDescription}>
                  {post.imdb_description}
                </Text> */}
                </View>
              </Pressable>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListScreen;

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
