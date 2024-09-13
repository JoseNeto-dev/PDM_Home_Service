import { View, Text, Image, Button, Alert, FlatList } from 'react-native';
import { styles } from './styles';
import { BlocoInformationPrestador } from '../../components/BlocoPrestadorCliente';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useCallback, useContext, useState } from 'react';
import { PrestadorDTO } from '../../dto/GetPrestadorDTO';
import { api } from '../../api';
import { configIp } from '../../api/config/configIp';
import { processarPrestador } from '../../api/config/converterIP';
import { AuthContext } from '../../contextS/Auth';



export function ListPrestadores() {
    const navigation = useNavigation();
    const [dadosPrestador, setDadosPrestador] = useState<PrestadorDTO[]>([]);
    const [carregando, setCarregando] = useState<boolean>(true);
    const authData = useContext(AuthContext);

    const buscarPrestadores = async () => {
        try {
          const response = await api.get<PrestadorDTO[]>('/prestador', {
            headers: {
                Authorization: `Bearer ${authData.authData?.token}`,
                email: authData.authData?.email
              }
        
          });
          const prestadorComIp = processarPrestador(response.data, configIp.apiBaseUrl);
          setDadosPrestador(prestadorComIp);
        } catch (error) {
          console.error('Erro ao carregar anúncios:', error);
          Alert.alert('Erro', 'Não foi possível carregar os prestadores');
        } finally {
          setCarregando(false);
        }
      };
      useFocusEffect(
        useCallback(() => {
          buscarPrestadores();
        }, [])
      );

    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    return (
        <View style={styles.container}>
          
            <View style={styles.buttonVoltar}>
                <ButtonVoltar/>
            </View>
            <FlatList
                data={dadosPrestador}
                ListHeaderComponent={
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Econtrar Prestador</Text>
                        <Text style={styles.subtitle}> Encontre abaixo todos os profissionais que você procura</Text>
                    </View>
                }
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <BlocoInformationPrestador
                        namePrestador={item.nome}
                        email= {item.email}
                        image={item.foto}
                        latitude={item.prestador.latitude}
                        longitude={item.prestador.longitude}
                    />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    alignItems: 'center', // Centraliza os itens na horizontal
                    justifyContent: 'center', // Centraliza os itens na vertical
                    paddingBottom: 20,
                }}
                style={{ flex: 1 }} // Ocupará o espaço disponível da tela
            />

        </View>
        
    )
}