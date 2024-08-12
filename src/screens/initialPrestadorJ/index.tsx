import { View, Text, Image, Button, Alert, FlatList } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { BlocoInformationPrestador } from '../../components/BlocoInfomationPrestador';
import { Header } from '../../components/Header';
import { BlocoAnuncioPrestador } from '../../components/BlocoAnuncioPrestador';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../homeZ';


export function InitialPrestador() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
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
        // Adicione mais itens se necessário
    ];

    return (
        <View style={styles.container}>
            <Header image={require('../../../assets/jesus.png')} onPress={handlePress} key={2} />

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
                        onPress={handlePress}
                        preco={item.preco}
                        title={item.title}
                        image={item.image}
                    />
                )}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 20 }}
            />

        </View>)


}