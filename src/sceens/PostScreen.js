import React, {useEffect, useCallback} from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import { THEME } from '../theme';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { toggleBooked, removePost } from '../store/actions/post'; 

export const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const postId = navigation.getParam("postId");

  const post = useSelector(state => state.post.allPosts.find(p => p.id === postId))

  const booked = useSelector(state => 
    state.post.bookedPosts.some(post => post.id === postId)
  )

  useEffect(() => {
    navigation.setParams({ booked })
  }, [booked])

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post))
  }, [dispatch, post])

  useEffect(() => {
    navigation.setParams({ toggleHandler })
  }, [toggleHandler])

  const removeHandler = () => {
    Alert.alert(
      "Eliminar una publicación",
      "Estás seguro?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        { 
          text: "Eliminar", style: "destructive", 
          onPress() {
            navigation.navigate('Main')
            dispatch(removePost(postId))
          }
        }
      ],
      { cancelable: false }
    );
  };
  if (!post) {
    return null
  }
  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title=" Eliminar"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam("date");
  const booked = navigation.getParam("booked");
  const toggleHandler = navigation.getParam("toggleHandler");
  const iconName = booked ? 'ios-star' : 'ios-star-outline'
  return {
    headerTitle: "Publicacion del " + new Date(date).toLocaleDateString(), //Aqui ponemos en el header lo que queremos que se vea xuando entramos a la publicacion: nos devolvera "Publicacion del + la fecha"
    headerRight:() => (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item 
          title="Take photo" 
          iconName={iconName} 
          onPress={toggleHandler}/>
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 600,
    marginTop: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  textWrap: {
    padding: 20
  },
  title: {
    fontFamily: "open-regular"
  }
});
