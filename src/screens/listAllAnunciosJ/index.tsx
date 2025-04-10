import React, { useState, useCallback, useContext } from 'react';
import { View, Text, Alert, FlatList, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { api } from '../../api';
import { styles } from './styles';
import { BlocoAnuncioCliente } from '../../components/BlocoAnuncioCliente';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { AnuncioCompletoDTO } from '../../dto/AnuncioCompletoDTO';
import { configIp } from '../../api/config/configIp';
import { processarAnuncios } from '../../api/config/converterIP';
import { AuthContext } from '../../contextS/Auth';
import { Button } from 'react-native-paper';
import { CustomButton } from '../../components/ButtonXL';


export function ListAnuncios() {
    const [dadosAnuncios, setDadosAnuncios] = useState<AnuncioCompletoDTO[]>([]);
    const [carregando, setCarregando] = useState<boolean>(false);
    const authData = useContext(AuthContext);

    const buscarAnuncios = async () => {
        try {
            setCarregando(true);
            const response = await api.get('/anuncios', {

                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email
                }

            });
            const anunciosComIp = processarAnuncios(response.data, configIp.apiBaseUrl);
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

    // const localização = getAddressFromLatLon(item.prestador.latitude, item.prestador.longitude);

    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>
            {carregando ? (
                <Text>Carregando...</Text>
            ) : (<FlatList
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
                        preco={item.preco}
                        title={item.titulo}
                        image={item.categoria.icone}
                        telefone={item.prestador.usuario.telefone}
                        latitude={item.prestador.latitude}
                        longitude={item.prestador.longitude}
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