import { View, Text, Image, Button, Alert, FlatList } from 'react-native';
import { styles } from './styles';
import { BlocoAnuncioCliente } from '../../components/BlocoAnuncioCliente';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { useCallback, useContext, useEffect, useState } from 'react';
import { AnuncioCompletoDTO } from '../../dto/AnuncioCompletoDTO';
import { api } from '../../api';
import { configIp } from '../../api/config/configIp';
import { useFocusEffect, useRoute, RouteProp } from '@react-navigation/native';
import { processarAnuncios } from '../../api/config/converterIP';
import { AuthContext } from '../../contextS/Auth';
import {RouteParams} from '../../dto/CategoriaDTO'

export function CategoriaEscolhida() {
    const [dadosAnuncios, setDadosAnuncios] = useState<AnuncioCompletoDTO[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [nomeCategoria, setNomeCategoria] = useState<string>('');
    const authData = useContext(AuthContext);
    const route = useRoute<RouteProp<RouteParams, 'CategoriaEscolhida'>>();
    const { idCategoria } = route.params;
    
    useFocusEffect(
        useCallback(() => {
            if (idCategoria) { // Certifique-se de que categoriaId está disponível
                buscarAnuncios();
            }
        }, [idCategoria])
    );
    const buscarAnuncios = async () => {
        try {
            // Note que a URL agora inclui o idCategoria diretamente como parte da URL
            const response = await api.get<AnuncioCompletoDTO[]>(`/anunciosCategoria/${idCategoria}`, {

                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email
                }

            });
            const anunciosComIp = processarAnuncios(response.data, configIp.apiBaseUrl);
            setDadosAnuncios(anunciosComIp);

            // Definindo o nome da categoria com base no primeiro anúncio carregado
            if (anunciosComIp.length > 0) {
                setNomeCategoria(anunciosComIp[0].categoria.servico);
            }
        } catch (error) {
            console.error('Erro ao carregar anúncios:', error);
            Alert.alert('Erro', 'Não foi possível carregar os anúncios');
        } finally {
            setCarregando(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            if (idCategoria) { // Certifique-se de que idCategoria não está vazio antes de buscar os anúncios
                buscarAnuncios();
            }
        }, [idCategoria])
    );

    const handlePress = () => {
        Alert.alert('Botão de WhatsApp pressionado');
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
                            <Text style={styles.title}>{nomeCategoria}</Text>
                            <Text style={styles.subtitle}>Encontre abaixo os anúncios desta categoria</Text>
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
