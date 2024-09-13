import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { blocoAnuncioStyles } from "./styles";
import { globalTheme } from '../../global/styles/themes';
import FontAwesome from '@expo/vector-icons/FontAwesome';

interface CustomBlocoProps {
    namePrestador: string;
    title: string;
    image: string;
    preco: string;
    telefone: string;
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

export function BlocoAnuncioCliente({ namePrestador, title, image, preco, telefone, latitude, longitude }: CustomBlocoProps) {
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
                <Text style={blocoAnuncioStyles.description} numberOfLines={1}>
                    {title}
                </Text>
                <View style={blocoAnuncioStyles.textName}>
                    <Text style={blocoAnuncioStyles.content} numberOfLines={1}>
                        {namePrestador}
                    </Text>
                    <Text style={blocoAnuncioStyles.content} numberOfLines={1}>
                        {localizacao ? localizacao : 'Carregando endereço...'}
                    </Text>
                    <Text style={blocoAnuncioStyles.content}>
                        {preco}
                    </Text>
                    <Text style={blocoAnuncioStyles.content}>
                        {telefone}
                    </Text>
                </View>
            </View>
        </View>
    );
}
