import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image, ImageSourcePropType } from 'react-native';
import { blocoAnuncioStyles } from "./styles"
import { globalTheme } from '../../global/styles/themes';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from '../Header/styles';


interface CustomBlocoInfoProps {
    namePrestador: string;
    email: string;
    image?: string;
    latitude: number;
    longitude: number;
}

const getAddressFromLatLon = async (latitude: number, longitude: number) => {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'YourAppName', // Nominatim recomenda incluir isso
                'Accept': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar o endereço: ${response.statusText}`);
        }

        const data = await response.json();

        const locCompleta = `${data.address.city_district} - ${data.address.state}`
        return locCompleta; // Retorna o endereço completo
    } catch (error) {
        console.error('Erro:', error);
        return 'Endereço indisponível';
    }
};

export function BlocoInformationPrestador({ namePrestador, email, image, latitude, longitude }: CustomBlocoInfoProps) {
    const [localizacao, setLocalizacao] = useState<string | null>(null);

    useEffect(() => {
        const fetchAddress = async () => {
            const address = await getAddressFromLatLon(latitude, longitude);
            setLocalizacao(address);
        };

        fetchAddress();
    }, [latitude, longitude]);
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
                        <Text style={blocoAnuncioStyles.content}>{localizacao ? localizacao : 'Carregando endereço...'}</Text>
                    </Text>

                </View>
            </View>
        </View>
    );
}