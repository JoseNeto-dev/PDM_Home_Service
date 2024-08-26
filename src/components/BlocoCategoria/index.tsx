import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import { ImageProps } from "react-native";
import { blocoAnuncioStyles } from "./styles"
import { useNavigation } from '@react-navigation/native';

interface CustomBlocoProps {
    categoria: string;
    image: ImageSourcePropType;
}

export function BlocoCategoria({ categoria, image}: CustomBlocoProps) {
    const navigation = useNavigation();

    const handlePress = () => {
    };

    return (
        <View style={blocoAnuncioStyles.container}>
            <Image style={blocoAnuncioStyles.image} source={image} />
            <Text style={blocoAnuncioStyles.description}>{categoria} </Text>
        </View>
    );
}