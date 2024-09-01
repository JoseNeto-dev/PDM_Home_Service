import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import { ImageProps } from "react-native";
import { blocoAnuncioStyles } from "./styles"
import Edit from '@expo/vector-icons/MaterialIcons';
import Delet from '@expo/vector-icons/MaterialIcons';
import { styles } from '../../screens/homeZ/styles';
import { globalTheme } from '../../global/styles/themes';
import { ConfirmModal } from '../ModalConfirmation';
import { useNavigation } from '@react-navigation/native';

interface CustomBlocoProps {
    namePrestador: string;
    title: string;
    image: string;
    preco: string;
}

export function BlocoAnuncioPrestador({ namePrestador, title, image, preco }: CustomBlocoProps) {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const handleDeletePress = () => {
        setModalVisible(true);
    };

    const editAnuncioPress = () => {
        navigation.navigate('UpdateAnuncio');
    };

    const confirmDelete = () => {
        setModalVisible(false);
        // Aqui você pode adicionar a lógica para deletar o item
        console.log('Item deletado!');
    };

    return (
        <View style={blocoAnuncioStyles.container}>
            <Image source={{ uri: image }} style={blocoAnuncioStyles.image} />
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
                <TouchableOpacity onPress={editAnuncioPress} style={blocoAnuncioStyles.icons}>
                    <Edit name="edit" size={24} color={globalTheme.COLORS.purple700} />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleDeletePress} style={blocoAnuncioStyles.icons}>
                    <Delet name="delete" size={24} color={globalTheme.COLORS.purple700} />
                </TouchableOpacity>
            </View>
            <ConfirmModal
                visible={isModalVisible}
                onConfirm={confirmDelete}
                onClose={() => setModalVisible(false)} title={'Anúncio'} message={'Deseja realmente excluir?'}            />

        </View>
    );
}