import React from 'react';
import { View, TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import { styles } from "./styles"
import { globalTheme } from '../../global/styles/themes';
import FontAwesome from '@expo/vector-icons/FontAwesome';


interface CustomHeaderProps {
    image: ImageSourcePropType;
    onPress: () => void        
}


export function Header({ image, onPress }: CustomHeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>HomeServices</Text>
            <TouchableOpacity onPress={onPress}>
                <Image style={styles.imageProfile} source={image} />
            </TouchableOpacity>
        </View>
    );
}