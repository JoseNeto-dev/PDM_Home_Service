import React, { useState, useCallback } from 'react';
import { View, Text, Alert, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { api } from '../../api';
import { styles } from './styles';
import { BlocoAnuncioCliente } from '../../components/BlocoAnuncioCliente';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { AnuncioCompletoDTO } from '../../dto/AnuncioCompletoDTO';
import { configIp } from '../../api/configIp';

const substituirLocalhostPorIp = (url: string, enderecoIp: string): string => {
    return url.replace('localhost', enderecoIp);
};

export function ListAnuncios() {
    const [dadosAnuncios, setDadosAnuncios] = useState<AnuncioCompletoDTO[]>([]);
    const [carregando, setCarregando] = useState<boolean>(false);

    const buscarAnuncios = async () => {
        try {
            setCarregando(true);
            const response = await api.get('/anuncios');
            console.log('Dados recebidos da API:', response.data);
            // Substituir localhost pelo IP da máquina
            const anunciosComIp = response.data.map((anuncio: AnuncioCompletoDTO) => ({
                ...anuncio,
                categoria: {
                    ...anuncio.categoria,
                    icone: substituirLocalhostPorIp(anuncio.categoria.icone, configIp.apiBaseUrl),
                },
            }));
            console.log('Anúncios com IP:', anunciosComIp);
            setDadosAnuncios(anunciosComIp);
        } catch (error) {
            console.error('Erro ao carregar anúncios:', error);
            Alert.alert('Erro', 'Não foi possível carregar os anúncios');
        } finally {
            setCarregando(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            buscarAnuncios();
        }, [])
    );

    const aoPressionar = () => {
        Alert.alert('Direcionar para o whats');
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>
            {carregando ? (
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
                            onPress={aoPressionar}
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