import { View, Text, Image, Button, Alert, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { BlocoAnuncioPrestador } from '../../components/BlocoAnuncioPrestador';
import { globalTheme } from '../../global/styles/themes';
import Icon from 'react-native-vector-icons/Ionicons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { AnuncioCompletoDTO } from '../../dto/AnuncioCompletoDTO';
import { api } from '../../api';
import { configIp } from '../../api/config/configIp';
import { processarAnuncios } from '../../api/config/converterIP';

export function InitialPrestador() {
    const navigation = useNavigation();
    const [dadosAnuncios, setDadosAnuncios] = useState<AnuncioCompletoDTO[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
  
    const buscarAnuncios = async () => {
      try {
        const response = await api.get<AnuncioCompletoDTO[]>('/anunciosPrestador');
        const anunciosComIp = processarAnuncios(response.data, configIp.apiBaseUrl);
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
  
    const criarAnuncio = () => {
      navigation.navigate('CreateAnuncio');
    };  
    return (
      <View style={styles.container}>
        <Header image={require('../../../assets/jesus.png')} key={2} />
  
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
  
        <View style={styles.barra}>
          <TouchableOpacity onPress={criarAnuncio}>
            <Icon name="add-circle-outline" color={globalTheme.COLORS.purple700} size={30} />
          </TouchableOpacity>
          <Text style={styles.textBotton}>
            Criar Anúncio
          </Text>
        </View>
      </View>
    );
  }