import React from 'react';
import { StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { useSelector } from 'react-redux'

import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PostList } from '../components/PostList';

export const BookedScreen = ({ navigation }) => {
  const openPostHandler = post => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked
    });
  };

  const bookedPosts = useSelector(state => state.post.bookedPosts)

  return (
    <PostList data={bookedPosts} onOpen={openPostHandler}/>
  );
};

BookedScreen.navigationOptions = ({navigation}) => ({
  headerTitle: "Favoritos",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Toggle Drawer" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>
  )
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
