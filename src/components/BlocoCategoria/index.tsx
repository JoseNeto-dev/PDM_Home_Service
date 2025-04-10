import React from 'react';
import { View, Text, Image} from 'react-native';
import { blocoAnuncioStyles } from "./styles"

interface CustomBlocoProps {
    categoria: string;
    image: string;
    
}

export function BlocoCategoria({ categoria, image}: CustomBlocoProps) {
    return (
        <View style={blocoAnuncioStyles.container}>
            <Image style={blocoAnuncioStyles.image} source={{uri: image}} />
            <Text style={blocoAnuncioStyles.description}>{categoria} </Text>
        </View>
    );
}