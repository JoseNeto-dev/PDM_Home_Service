import { View, Text, Image, Button, Alert, FlatList } from 'react-native';
import { styles } from './styles';
import { BlocoAnuncioCliente } from '../../components/BlocoAnuncioCliente';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { useCallback, useEffect, useState } from 'react';
import { AnuncioCompletoDTO } from '../../dto/AnuncioCompletoDTO';
import { api } from '../../api';
import { configIp } from '../../api/configIp';
import { useFocusEffect } from '@react-navigation/native';

export function CategoriaEscolhida() {
    const [dadosAnuncios, setDadosAnuncios] = useState<AnuncioCompletoDTO[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const [nomeCategoria, setNomeCategoria] = useState<string>('');
    const [idCategoria, setIdCategoria] = useState<string>('');

    // Função para substituir 'localhost' pelo IP da máquina (se necessário)
    const substituirLocalhostPorIp = (url: string, enderecoIp: string): string => {
        return url.replace('localhost', enderecoIp);
    };

    useEffect(() => {
        // Aqui você pode definir o idCategoria a partir de props ou outras fontes
        setIdCategoria('a8b6db1f-43d7-4352-baab-8c7826175447');
    }, []);

    const buscarAnuncios = async () => {
        try {
            // Note que a URL agora inclui o idCategoria diretamente como parte da URL
            const response = await api.get<AnuncioCompletoDTO[]>(`/anunciosCategoria/${idCategoria}`);
            const anunciosComIp = response.data.map((anuncio) => ({
                ...anuncio,
                categoria: {
                    ...anuncio.categoria,
                    icone: substituirLocalhostPorIp(anuncio.categoria.icone, configIp.apiBaseUrl), // Substitua pelo IP correto
                },
                prestador: {
                    ...anuncio.prestador,
                    usuario: {
                        ...anuncio.prestador.usuario,
                        foto: anuncio.prestador.usuario.foto 
                            ? substituirLocalhostPorIp(anuncio.prestador.usuario.foto, configIp.apiBaseUrl)
                            : undefined,
                    },
                },
            }));
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
                            namePrestador={item.prestador.usuario.nome}
                            onPress={handlePress}
                            preco={item.preco}
                            title={item.titulo}
                            image={item.categoria.icone}
                            city={'São José de Piranhas'} // Substitua pelo valor real se disponível
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
