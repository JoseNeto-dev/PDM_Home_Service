import React, { useContext, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { blocoAnuncioStyles } from "./styles"
import Edit from '@expo/vector-icons/MaterialIcons';
import Delet from '@expo/vector-icons/MaterialIcons';
import { globalTheme } from '../../global/styles/themes';
import { ConfirmModal } from '../ModalConfirmation';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../api';
import { AnuncioCompletoDTO } from '../../dto/AnuncioCompletoDTO';
import { AuthContext } from '../../contextS/Auth';

interface CustomBlocoProps {
    namePrestador: string;
    title: string;
    image: string;
    preco: string;
    idAnuncio: string;
    refreshAnuncios: () => void;
}

export function BlocoAnuncioPrestador({ namePrestador, title, image, preco, idAnuncio, refreshAnuncios }: CustomBlocoProps) {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [dadosAnuncios, setDadosAnuncios] = useState<AnuncioCompletoDTO[]>([]);
    const authData = useContext(AuthContext);

    const handleDeletePress = () => {
        setModalVisible(true);
    };

    const editAnuncioPress = () => {
        navigation.navigate('UpdateAnuncio', { idAnuncio });
    };

    const confirmDelete = async () => {
        setModalVisible(false);
        const deletar = await api.delete(`/anuncio/${idAnuncio}`, {
            headers: {
                Authorization: `Bearer ${authData.authData?.token}`,
                email: authData.authData?.email
            }
        })
        console.log('Item deletado!');
        refreshAnuncios();
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
                onClose={() => setModalVisible(false)} title={'Anúncio'} message={'Deseja realmente excluir?'} />

        </View>
    );
}