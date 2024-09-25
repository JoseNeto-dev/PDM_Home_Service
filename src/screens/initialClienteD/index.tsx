import React, { useCallback, useContext, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Alert } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { BlocoCategoria } from '../../components/BlocoCategoria';
import { globalTheme } from '../../global/styles/themes';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { CategoriaDTO } from '../../dto/CategoriaDTO';
import { api } from '../../api';
import { configIp } from '../../api/config/configIp';
import { substituirLocalhostPorIp } from '../../api/config/converterIP';
import { AuthContext } from '../../contextS/Auth';

export function InitialCliente() {
    const navigation = useNavigation();
    const [dadosCategoria, setDadosCategoria] = useState<CategoriaDTO[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [refreshing, setRefreshing] = useState<boolean>(false);
    const authData = useContext(AuthContext);
    const [foto, setFoto] = useState('');

   const carregarCategorias = async () => {
    try {
        const response = await api.get<CategoriaDTO[]>('/listCategorias', {
            headers: {
                Authorization: `Bearer ${authData.authData?.token}`,
                email: authData.authData?.email,
            },
        });

        if (response.status === 200) {
            const categoriasComIp = response.data.map(categoria => ({
                id: categoria.id,
                servico: categoria.servico, // Mapeia 'servico' para 'categoria'
                icone: substituirLocalhostPorIp(categoria.icone, configIp.apiBaseUrl), // Mapeia 'icone' para 'foto'
            }));
            setDadosCategoria(categoriasComIp);
        } else {
            Alert.alert('Erro', 'Não foi possível carregar as categorias.');
        }
    } catch (error) {
        console.error('Erro ao carregar categorias:', error);
        Alert.alert('Erro', 'Não foi possível carregar as categorias.');
    }
};

    
    

    // Função para buscar os dados do cliente
    const buscarDadosCliente = async () => {
        try {
            setCarregando(true);
            const response = await api.get('/clientePerfil', {
                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email,
                },
            });
            const fotoInicial = substituirLocalhostPorIp(response.data.foto, configIp.apiBaseUrl);
            setFoto(fotoInicial);
        } catch (error) {
            console.error('Erro ao carregar dados do perfil:', error);
            Alert.alert('Erro ao carregar dados do perfil!');
        } finally {
            setCarregando(false);
        }
    };

    // Função para atualizar os dados na lista
    const onRefresh = async () => {
        setRefreshing(true);
        await carregarCategorias();
        setRefreshing(false);
    };

    // Função que executa ao focar a tela
    useFocusEffect(
        useCallback(() => {
            buscarDadosCliente();
            carregarCategorias();
        }, [])
    );

    // Função de navegação ao escolher uma categoria
    const CategoriaEscolhida = (id: string) => {
        navigation.navigate('CategoriaEscolhida', { idCategoria: id });
    };
    

    const EncontrarPrestador = () => {
        navigation.navigate('ListPrestadores');
    };

    const navigateToProfileCliente = () => {
        navigation.navigate('ProfileCliente');
    };

    const navigateToListAllAnuncios = () => {
        navigation.navigate('ListAnuncios');
    };

    return (
        <View style={styles.container}>
            <Header image={{ uri: foto }} onPress={navigateToProfileCliente} key={2} />
            {carregando ? (
                <Text>Carregando...</Text>
            ) : (
                <FlatList
                    key={'_'}
                    data={dadosCategoria}
                    numColumns={2}
                    ListHeaderComponent={
                        <View style={styles.titleContainer}>
                            <Image
                                source={require('../../../assets/prestador.png')}
                                style={styles.headerImage}
                            />
                            <Text style={styles.title}>Categorias</Text>
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => CategoriaEscolhida(item.id)}>
                            <BlocoCategoria
                                categoria={item.servico}
                                image={item.icone}
                            />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingBottom: 20,
                    }}
                    style={{ flex: 1 }}
                    refreshing={refreshing}
                    onRefresh={onRefresh} // Adiciona a função de refresh
                />
            )}
            <View style={styles.barra}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={EncontrarPrestador} style={styles.iconButton}>
                        <Icon name="search-outline" color={globalTheme.COLORS.purple700} size={30} />
                    </TouchableOpacity>
                    <Text style={styles.textBotton}>Encontrar Prestador</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={navigateToListAllAnuncios} style={styles.iconButton}>
                        <Icon name="list-outline" color={globalTheme.COLORS.purple700} size={30} />
                    </TouchableOpacity>
                    <Text style={styles.textBotton}>Listar Anúncios</Text>
                </View>
            </View>
        </View>
    );
}
