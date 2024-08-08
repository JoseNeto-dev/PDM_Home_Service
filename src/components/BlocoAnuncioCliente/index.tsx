import React from 'react';
import { View, TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import { blocoAnuncioStyles } from "../BlocoAnuncioPrestador/styles"
import { globalTheme } from '../../global/styles/themes';
import FontAwesome from '@expo/vector-icons/FontAwesome';


interface CustomBlocoProps {
    namePrestador: string;
    title: string;
    city: string;
    onPress: () => void;
    image: ImageSourcePropType;
    preco: string;
}

export function BlocoAnuncioCliente({ namePrestador, title, onPress, image, preco, city }: CustomBlocoProps) {
    return (
        <View style={blocoAnuncioStyles.container}>

            <Image style={blocoAnuncioStyles.image} source={image} />
            <View style={blocoAnuncioStyles.textContainer}>
                <Text style={blocoAnuncioStyles.description} numberOfLines={1}>
                    {title}
                </Text>
                <View style={blocoAnuncioStyles.textName}>
                    <Text style={blocoAnuncioStyles.content} numberOfLines={1} >
                        {namePrestador}
                    </Text>
                    <Text style={blocoAnuncioStyles.content} numberOfLines={1} >
                        {city}
                    </Text>
                    <Text style={blocoAnuncioStyles.content}>
                        {preco}
                    </Text>
                </View>
            </View>
            <View style={blocoAnuncioStyles.iconView}>
                <TouchableOpacity onPress={() => console.log('Edit icon pressed')} style={blocoAnuncioStyles.icons}>
                    <FontAwesome name="whatsapp" size={20} color={globalTheme.COLORS.white} />
                </TouchableOpacity>

            </View>

        </View>
    );
}