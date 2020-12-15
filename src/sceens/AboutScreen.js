import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const AboutScreen = () => {
  return (
    <View style={styles.center}>
      <Text>AboutScreen</Text>
    </View>
  );
};
/*En esta pantalla quisimos poner nuestra informacion pero por cuestiones de tiempo no se pudo*/
AboutScreen.navigationOptions = ({navigation}) => ({
  headerTitle: " Sobre la aplicación",
headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item title="Alternar extracciónr" iconName="ios-menu" onPress={() => navigation.toggleDrawer()}/>
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
