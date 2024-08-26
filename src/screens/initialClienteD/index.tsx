import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { BlocoCategoria } from '../../components/BlocoCategoria';
import { globalTheme } from '../../global/styles/themes';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export function InitialCliente() {
    
    const navigation = useNavigation();
    
    const ListarAnuncios = () => {
         navigation.navigate('ListAnuncios');
    };
    const EncontrarPrestador = () => {
        navigation.navigate('ListPrestadores');
   };

    const dadosCategorias = [
        {
            id: '1',
            categoria: 'Babá',
            image: require('../../../assets/chupeta.png'),
        },
        {
            id: '2',
            categoria: 'Cozinheiro',
            image: require('../../../assets/cozinhar-comida-em-uma-cacarola-quente.png'),
        },
        {
            id: '3',
            categoria: 'Cuidador de Idoso',
            image: require('../../../assets/mulher-velha.png'),
        },
        {
            id: '4',
            categoria: 'Diarista',
            image: require('../../../assets/f61cb9f84f9d982e5203cf329d9b924e.png'),
        },
        {
            id: '5',
            categoria: 'Eletricista',
            image: require('../../../assets/eletricidade.png'),
        },
        {
            id: '6',
            categoria: 'Encanador',
            image: require('../../../assets/torneira.png'),
        },
        {
            id: '7',
            categoria: 'Enfermeiro',
            image: require('../../../assets/saude.png'),
        },
        {
            id: '8',
            categoria: 'Fisioterapeuta',
            image: require('../../../assets/fisioterapia.png'),
        },
        {
            id: '9',
            categoria: 'Personal Trainner',
            image: require('../../../assets/halteres.png'),
        },
        {
            id: '10',
            categoria: 'Pedreiro',
            image: require('../../../assets/parede-de-tijolos.png'),
        },
        {
            id: '11',
            categoria: 'Lavanderia',
            image: require('../../../assets/maquina-de-lavar.png'),
        },
        {
            id: '12',
            categoria: 'Chefe de Cozinha',
            image: require('../../../assets/chefe-de-cozinha.png'),
        },
        {
            id: '13',
            categoria: 'Passeador de Cães',
            image: require('../../../assets/carrinho-de-bebe.png'),
        },
        {
            id: '14',
            categoria: 'Jardineiro',
            image: require('../../../assets/crescer-planta.png'),
        }
    ];

    return (
        <View style={styles.container}>
            <Header image={require('../../../assets/jesus.png')} key={2} />

            <FlatList
                key={'_'}
                data={dadosCategorias}
                numColumns={2} // Define 2 colunas
                ListHeaderComponent={
                    <View style={styles.titleContainer}>
                        <Image 
                            source={require('../../../assets/prestador.png')} // Substitua pelo caminho da sua imagem
                            style={styles.headerImage} // Defina o estilo da imagem conforme necessário
                        />
                        <Text style={styles.title}>Categorias</Text>
                    </View>
                }
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <BlocoCategoria
                        categoria={item.categoria}
                        image={item.image}
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
            <View style={styles.barra}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={EncontrarPrestador} style={styles.iconButton}>
                        <Icon name="search-outline" color={globalTheme.COLORS.purple700} size={30} />
                    </TouchableOpacity>
                    <Text style={styles.textBotton}>Encontrar Prestador</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={ListarAnuncios} style={styles.iconButton}>
                        <Icon name="list-outline" color={globalTheme.COLORS.purple700} size={30} />
                    </TouchableOpacity>
                    <Text style={styles.textBotton}>Listar Anúncios</Text>
                </View>
            </View>
        </View>
    );
}
