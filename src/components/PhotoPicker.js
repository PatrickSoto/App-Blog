import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';// exportando  dependencias para permisos de la camara desde nodes module

import { View, StyleSheet, Image, Button, Alert } from 'react-native';// exportando  dependencias desde nodes module

async function askForPermissions() {//funcion permisos
    const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL
    )
    if (status !== 'granted') {
        Alert.alert('Error ', "No has dado permiso para crear una foto")//alerta de permisos no concedidos
        return false
    }
    return true
}
//importsndo ls foto desde el dispositivo
export const PhotoPicker = ({ onPick }) => {
    const [image, setImage] = useState(null)
    const takePhoto = async () => {
        const hasPermissions = await askForPermissions()
        if (!hasPermissions) {
            return false
        }

        const img = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        })

        setImage(img.uri);
        onPick(img.uri);
    }
    return (
        <View style={styles.wrapper}>
            <Button title="Para hacer una foto" onPress={takePhoto}/>
            {image && <Image style={styles.image} source={{ uri: image }}/>}
        </View>
    )
}
//dando posisciones y centrando
const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})