import React, {useEffect, useCallback} from 'react';
import { Alert, Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import { THEME } from '../theme';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
//import { toggleBooked, removePost } from '../store/actions/post'; en espera de mi compa;ero patrick

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