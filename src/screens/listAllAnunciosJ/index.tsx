import React, { useState, useCallback } from 'react';
import { View, Text, Alert, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { api } from '../../api';
import { styles } from './styles';
import { BlocoAnuncioCliente } from '../../components/BlocoAnuncioCliente';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { AnuncioCompletoDTO } from '../../dto/AnuncioCompletoDTO';

export function ListAnuncios() {
    const [dadosAnuncios, setDadosAnuncios] = useState<AnuncioCompletoDTO[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchAnuncios = async () => {
        try {
            setIsLoading(true);
            const response = await api.get('/anuncios');
            console.log('Dados recebidos da API:', response.data);
            setDadosAnuncios(response.data);
        } catch (error) {
            console.error('Erro ao carregar anúncios:', error);
            Alert.alert('Erro', 'Não foi possível carregar os anúncios');
        } finally {
            setIsLoading(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            fetchAnuncios();
        }, [])
    );

    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>
            {isLoading ? (
                <Text>Carregando...</Text>
            ) : (
                <FlatList
                    data={dadosAnuncios}
                    ListHeaderComponent={
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Todos os Anúncios</Text>
                            <Text style={styles.subtitle}>Encontre abaixo todos os anúncios cadastrados</Text>
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <BlocoAnuncioCliente
                            namePrestador={item.prestador.usuario ? item.prestador.usuario.nome : 'Nome não disponível'}
                            onPress={handlePress}
                            preco={item.preco}
                            title={item.titulo}
                            image={item.categoria.icone}
                            city={'Cajazeiras'}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: 20,
                    }}
                    style={{ flex: 1 }}
                />
            )}
        </View>
    );
}
