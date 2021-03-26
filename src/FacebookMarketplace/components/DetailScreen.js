import React, { useEffect, useRef } from 'react';
import { Animated, Image, Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';

// import Button from './Button';
import Icon from './Icon';

const SPACING = 15;

export default DetailScreen = ({ route, navigation }) => {
  const { post } = route.params;
  const safeInsets = useSafeAreaInsets();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      fromValue: 0.5,
      toValue: 1,
      duration: 150,
      delay: 500,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.wrapper}>
      <Animated.View
        style={{
          opacity,
          position: 'absolute',
          top: safeInsets.top + SPACING,
          left: safeInsets.left + SPACING,
          right: safeInsets.right + SPACING,
          zIndex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Icon name='x' onPress={() => navigation.goBack()} />
        {/* <Icon name='more-horizontal' /> */}
      </Animated.View>

      <SharedElement id={post.imdb_link}>
        <Image source={{ uri: post.imdb_image_url }} style={styles.postImage} />
      </SharedElement>

      <View style={styles.postDetails}>
        <Text style={styles.postTitle}>{post.imdb_title}</Text>

        <Text style={styles.postPrice}>€{post.imdb_user_rating}</Text>

        {/* <Button title='Contact Seller' style={styles.postContactButton} /> */}

        <Animated.Text
          style={{
            opacity,
            fontSize: 17,
          }}
        >
          {post.imdb_description}
        </Animated.Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // wrapper: {
  //   flex: 1,
  // },
  // listHeader: {
  //   fontSize: 28,
  //   fontWeight: '800',
  //   margin: SPACING,
  // },
  // posts: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  // },
  // postTexts: {
  //   margin: 10,
  //   marginBottom: 15,
  // },
  // postHeader: {
  //   fontWeight: '600',
  // },
  // postDescription: {
  //   color: 'gray',
  // },
  postImage: {
    height: 300,
    // width: '100%',
  },
  postDetails: {
    paddingVertical: 10,
    paddingHorizontal: SPACING,
  },
  postTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  postPrice: {
    fontSize: 24,
  },
  postContactButton: {
    marginVertical: SPACING,
  },
});
