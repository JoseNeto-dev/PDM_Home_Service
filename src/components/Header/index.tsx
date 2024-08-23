import React from 'react';
import { View, TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import { styles } from "./styles"
import { globalTheme } from '../../global/styles/themes';
import FontAwesome from '@expo/vector-icons/FontAwesome';


interface CustomHeaderProps {
    image: ImageSourcePropType;
}

export function Header({ image }: CustomHeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeServices</Text>
            <Image style={styles.imageProfile} source={image} />
        </View>
    );
}