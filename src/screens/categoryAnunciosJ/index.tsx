import { View, Text, Image, Button, Alert, FlatList } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { BlocoAnuncioCliente } from '../../components/BlocoAnuncioCliente';
import AntDesign from '@expo/vector-icons/AntDesign';
import { globalTheme } from '../../global/styles/themes';
import { ButtonVoltar } from '../../components/ButtonVoltar';



export function CategoriaEscolhida() {
    const categoria = 'Diarista'
    const dadosAnuncios = [
        {
            id: '1',
            namePrestador: 'Jaqueline Pereira da Silva',
            preco: 'R$ 400,00',
            title: 'Lavagem de roupa - Pesada',
            image: require('../../../assets/maquina-de-lavar.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '3',
            namePrestador: 'Maria Clara Almeida',
            preco: 'R$ 350,00',
            title: 'Cuidadora de idoso',
            image: require('../../../assets/mulher-velha.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '4',
            namePrestador: 'Carlos Henrique dos Santos',
            preco: 'R$ 500,00',
            title: 'Reforma de Banheiro',
            image: require('../../../assets/parede-de-tijolos.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '5',
            namePrestador: 'Paulo Roberto Lima',
            preco: 'R$ 250,00',
            title: 'Fisioterapeuta',
            image: require('../../../assets/fisioterapia.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '6',
            namePrestador: 'Ana Beatriz Souza',
            preco: 'R$ 450,00',
            title: 'Cozinheira',
            image: require('../../../assets/chefe-de-cozinha.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '7',
            namePrestador: 'Rodrigo Fernandes da Silva',
            preco: 'R$ 300,00',
            title: 'Jardinagem e Paisagismo',
            image: require('../../../assets/crescer-planta.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '8',
            namePrestador: 'Luciana Pereira dos Anjos',
            preco: 'R$ 550,00',
            title: 'Baba',
            image: require('../../../assets/chupeta.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '9',
            namePrestador: 'Felipe Augusto Ribeiro',
            preco: 'R$ 600,00',
            title: 'Instalação Elétrica Residencial',
            image: require('../../../assets/eletricidade.png'),
            city: 'São José de Piranhas'
        },
        // Adicione mais itens se necessário
    ];
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>
            <FlatList
                data={dadosAnuncios}
                ListHeaderComponent={
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{categoria}</Text>
                        <Text style={styles.subtitle}> Encontre abaixo os anúncios desta categoria</Text>
                    </View>
                }
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <BlocoAnuncioCliente
                        namePrestador={item.namePrestador}
                        onPress={handlePress}
                        preco={item.preco}
                        title={item.title}
                        image={item.image}
                        city={item.city}
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