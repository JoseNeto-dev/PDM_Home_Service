import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { BlocoAnuncioPrestador } from '../../components/BlocoAnuncioPrestador';
import { globalTheme } from '../../global/styles/themes';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useContext, useState } from 'react';
import { AnuncioCompletoDTO } from '../../dto/AnuncioCompletoDTO';
import { api } from '../../api';
import { configIp } from '../../api/config/configIp';
import { processarAnuncios, processarPrestador, substituirLocalhostPorIp } from '../../api/config/converterIP';
import { AuthContext } from '../../contextS/Auth';


export function InitialPrestador() {
  const navigation = useNavigation();
  const [dadosAnuncios, setDadosAnuncios] = useState<AnuncioCompletoDTO[]>([]);
  const [carregando, setCarregando] = useState<boolean>(true);
  const [refreshing, setRefreshing] = useState<boolean>(false); // Adiciona o estado para refreshing
  const authData = useContext(AuthContext);
  const [foto, setFoto] = useState('');

  const buscarAnuncios = async () => {
    try {
      const response = await api.get<AnuncioCompletoDTO[]>('/anunciosPrestador', {
        headers: {
          Authorization: `Bearer ${authData.authData?.token}`,
          email: authData.authData?.email,
        },
      });
      const anunciosComIp = processarAnuncios(response.data, configIp.apiBaseUrl);
      setDadosAnuncios(anunciosComIp);
      
    } catch (error) {
      console.error('Erro ao carregar anúncios:', error);
      Alert.alert('Erro', 'Não foi possível carregar os anúncios');
    } finally {
      setCarregando(false);
      setRefreshing(false); // Termina o refresh após a requisição
    }
  };

  const buscarDadosPrestador = async () => {
    try {
        setCarregando(true);
        const response = await api.get('/prestadorPerfil', {
            headers: {
                Authorization: `Bearer ${authData.authData?.token}`,
                email: authData.authData?.email
            }
        });
        const fotoInicial = substituirLocalhostPorIp(response.data.foto, configIp.apiBaseUrl);
        setFoto(fotoInicial);
    } catch (error) {
        console.error('Erro ao carregar dados do perfil! :(', error);
        Alert.alert('Erro ao carregar dados do perfil! :(');
    } finally {
        setCarregando(false);
    }
};

  // Função chamada quando o usuário puxa para atualizar
  const onRefresh = async () => {
    setRefreshing(true); // Ativa o estado de refresh
    await buscarAnuncios(); // Recarrega os anúncios
  };

  useFocusEffect(
    useCallback(() => {
      buscarAnuncios();
      buscarDadosPrestador();
    }, [])
  );

  const criarAnuncio = () => {
    navigation.navigate('CreateAnuncio');
  };
  const navigateToProfilePrestador = () => {
    navigation.navigate('ProfilePrestador');
  };

  return (
    <View style={styles.container}>
      <Header
        image={{ uri: foto }}
        onPress={navigateToProfilePrestador}
        key={2}
      />

      {carregando ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={dadosAnuncios}
          ListHeaderComponent={
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Meus Anúncios</Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <BlocoAnuncioPrestador
              namePrestador={item.prestador.usuario.nome}
              preco={item.preco}
              title={item.titulo}
              image={item.categoria.icone}
              idAnuncio={item.id}
              refreshAnuncios={buscarAnuncios}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingBottom: 20,
          }}
          style={{ flex: 1 }}
          onRefresh={onRefresh} // Função chamada ao puxar para baixo
          refreshing={refreshing} // Estado de carregamento para refresh
        />
      )}

      <View style={styles.barra}>
        <TouchableOpacity onPress={criarAnuncio}>
          <Icon name="add-circle-outline" color={globalTheme.COLORS.purple700} size={30} />
        </TouchableOpacity>
        <Text style={styles.textBotton}>Criar Anúncio</Text>
      </View>
    </View>
  );
}