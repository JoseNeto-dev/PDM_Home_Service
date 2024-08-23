import { View, Text, Image, Button, Alert, FlatList, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { BlocoInformationPrestador } from '../../components/BlocoPrestadorCliente';
import { Header } from '../../components/Header';
import { BlocoAnuncioPrestador } from '../../components/BlocoAnuncioPrestador';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../homeZ';
import { globalTheme } from '../../global/styles/themes';
import Icon from 'react-native-vector-icons/Ionicons';


export function InitialPrestador() {
    
    const navigation = useNavigation()
    const criarAnuncio = () => {
        // navigation.navigate('CreateAnuncio');
    };

    const dadosAnuncios = [
        {
            id: '1',
            namePrestador: 'Jaqueline Pereira da Silva',
            preco: 'R$ 400,00',
            title: 'Limpeza de Casa - Pesada',
            image: require('../../../assets/chupeta.png'),
        },
        {
            id: '3',
            namePrestador: 'Carlos Henrique dos Santos',
            preco: 'R$ 350,00',
            title: 'Pintura de Paredes Internas',
            image: require('../../../assets/chupeta.png'),
        },
        {
            id: '4',
            namePrestador: 'Maria Clara Almeida',
            preco: 'R$ 500,00',
            title: 'Reforma de Banheiro',
            image: require('../../../assets/chupeta.png'),
        },
        {
            id: '5',
            namePrestador: 'Paulo Roberto Lima',
            preco: 'R$ 250,00',
            title: 'Instalação de Ar-Condicionado',
            image: require('../../../assets/chupeta.png'),
        },
        {
            id: '19',
            namePrestador: 'Ana Beatriz Souza',
            preco: 'R$ 450,00',
            title: 'Limpeza de Vidros e Janelas',
            image: require('../../../assets/chupeta.png'),
        },
        {
            id: '6',
            namePrestador: 'Rodrigo Fernandes da Silva',
            preco: 'R$ 300,00',
            title: 'Jardinagem e Paisagismo',
            image: require('../../../assets/chupeta.png'),
        },
        {
            id: '7',
            namePrestador: 'Luciana Pereira dos Anjos',
            preco: 'R$ 550,00',
            title: 'Manutenção de Piscinas',
            image: require('../../../assets/chupeta.png'),
        },
        {
            id: '8',
            namePrestador: 'Felipe Augusto Ribeiro',
            preco: 'R$ 600,00',
            title: 'Instalação Elétrica Residencial',
            image: require('../../../assets/chupeta.png'),
        },
        // Dados que simulam a API
    ];

    return (
        <View style={styles.container}>
            <Header image={require('../../../assets/jesus.png')} key={2} />

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
                        namePrestador={item.namePrestador}
                        preco={item.preco}
                        title={item.title}
                        image={item.image}
                    />
                )
                }
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    alignItems: 'center', // Centraliza os itens na horizontal
                    justifyContent: 'center', // Centraliza os itens na vertical
                    paddingBottom: 20,
                }}
                style={{ flex: 1 }} // Ocupará o espaço disponível da tela

            />
            <View style={styles.barra}>
                <TouchableOpacity onPress={criarAnuncio}>
                    <Icon name="add-circle-outline" color={globalTheme.COLORS.purple700} size={30} />
                </TouchableOpacity>
                <Text style={styles.textBotton}>
                    Criar Anúncio
                </Text>
            </View>

        </View>)


}