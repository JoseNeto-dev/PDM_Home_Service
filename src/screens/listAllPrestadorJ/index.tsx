import { View, Text, Image, Button, Alert, FlatList } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import AntDesign from '@expo/vector-icons/AntDesign';
import { globalTheme } from '../../global/styles/themes';
import { BlocoInformationPrestador } from '../../components/BlocoPrestadorCliente';
import { ButtonVoltar } from '../../components/ButtonVoltar';



export function ListPrestadores() {
    const dadosPrestador = [
        {
            id: '1',
            namePrestador: 'Jaqueline Pereira da Silva',
            email: 'jaqu@gmail.com',
            image: require('../../../assets/jesus.png'),
            city: 'São José de Piranhas',
            
        },
        {
            id: '3',
            namePrestador: 'Maria Clara Almeida',
            email: 'mariaC@gmail.com',
            image: require('../../../assets/profileIcon.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '4',
            namePrestador: 'Carlos Henrique dos Santos',
            email: 'carlos@gmail.com',
            image: require('../../../assets/profileIcon.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '5',
            namePrestador: 'Paulo Roberto Lima',
            email: 'paulo@gmail.com',
            image: require('../../../assets/profileIcon.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '6',
            namePrestador: 'Ana Beatriz Souza',
            email: 'ana@gmail.com',
            image: require('../../../assets/profileIcon.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '7',
            namePrestador: 'Rodrigo Fernandes da Silva',
            email: 'rodrigo@gmail.com',
            image: require('../../../assets/profileIcon.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '8',
            namePrestador: 'Luciana Pereira dos Anjos',
            email: 'lu@gmail.com',
            image: require('../../../assets/profileIcon.png'),
            city: 'São José de Piranhas'
        },
        {
            id: '9',
            namePrestador: 'Felipe Augusto Ribeiro',
            email: 'felipe@gmail.com',
            image: require('../../../assets/profileIcon.png'),
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
                        namePrestador={item.namePrestador}
                        onPress={handlePress}
                        email= {item.email}
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