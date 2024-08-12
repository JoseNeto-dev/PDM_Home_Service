import React from 'react';
import { View, TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import { ImageProps } from "react-native";
import { blocoAnuncioStyles } from "./styles"
import Edit from '@expo/vector-icons/MaterialIcons';
import Delet from '@expo/vector-icons/MaterialIcons';
import { styles } from '../../screens/homeZ/styles';
import { globalTheme } from '../../global/styles/themes';


interface CustomBlocoProps {
    namePrestador: string;
    title: string;
    onPress: () => void;
    image: ImageSourcePropType;
    preco: string;
}

export function BlocoAnuncioPrestador({ namePrestador, title, onPress, image, preco }: CustomBlocoProps) {
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
                    <Text style={blocoAnuncioStyles.content}>
                        {preco}
                    </Text>
                </View>
            </View>
            <View style={blocoAnuncioStyles.iconView}>
                <TouchableOpacity onPress={() => console.log('Edit icon pressed')} style={blocoAnuncioStyles.icons}>
                    <Edit name="edit" size={24} color={globalTheme.COLORS.purple700} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log('Edit icon pressed')} style={blocoAnuncioStyles.icons}>
                    <Delet name="delete" size={24} color={globalTheme.COLORS.purple700}  />
                </TouchableOpacity>
            </View>

        </View>
    );
}