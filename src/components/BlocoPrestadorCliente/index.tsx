import React from 'react';
import { View, TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import { blocoAnuncioStyles } from "./styles"
import { globalTheme } from '../../global/styles/themes';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from '../Header/styles';


interface CustomBlocoInfoProps {
    namePrestador: string;
    email: string;
    city: string;
    onPress: () => void;
    image?: string;
}

export function BlocoInformationPrestador({ namePrestador, email, onPress, image, city }: CustomBlocoInfoProps) {
    return (
        <View style={blocoAnuncioStyles.container}>

            <Image source={{ uri: image }} style={blocoAnuncioStyles.image} />
            <View style={blocoAnuncioStyles.textContainer}>
                <Text numberOfLines={1}>
                    <Text style={blocoAnuncioStyles.description}>Nome: </Text>
                    <Text style={blocoAnuncioStyles.content}>{namePrestador}</Text>
                </Text>
                <View style={blocoAnuncioStyles.textName}>
                    <Text numberOfLines={1}>
                        <Text style={blocoAnuncioStyles.description}>Email: </Text>
                        <Text style={blocoAnuncioStyles.content}>{email}</Text>
                    </Text>
                    <Text numberOfLines={1}>
                        <Text style={blocoAnuncioStyles.description}>Cidade: </Text>
                        <Text style={blocoAnuncioStyles.content}>{city}</Text>
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