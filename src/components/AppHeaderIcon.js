import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Platform } from 'react-native'
import { THEME } from '../theme'
import { Ionicons } from '@expo/vector-icons'// exportando  dependencias desde nodes module

export const AppHeaderIcon = props => (//creando el encabezado del icono
    <HeaderButton
        {...props}
        iconSize={24} 
        color={Platform.OS === 'android' ? "#fff" : THEME.MAIN_COLOR}
        IconComponent={Ionicons}
    />
)