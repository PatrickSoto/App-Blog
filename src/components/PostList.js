import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import {Post} from './Post'// exportando  dependencias desde nodes module


//comprobando en pantalla principal si hay alguna publicacion o no
export const PostList = ({data, onOpen}) => {
    if (!data.length) {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.noItems}>
                   Aún no hay publicaciones
                </Text>
            </View>
        )
    }
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={post => post.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={onOpen} />}
            />
        </View>
    )
}
//dando posisciones y centrando
const styles = StyleSheet.create({
    wrapper: {
      padding: 10
    },
    noItems: {
        fontFamily: 'open-regular',
        textAlign: 'center',
        marginVertical: 10,
        fontSize: 18
    }
});