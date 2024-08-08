import { View, Text, Image, Button, Alert, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { BlocoAnuncioCliente } from '../../components/BlocoAnuncioCliente';
import { Header } from '../../components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export function InitialCliente() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    return (
        <SafeAreaProvider >
            <SafeAreaView style={styles.container}>

                <Header image={require('../../../assets/jesus.png')} onPress={handlePress} key={2}></Header>
                <BlocoAnuncioCliente
                    namePrestador='Jaqueline Pereira da Silva'
                    onPress={handlePress}
                    title='Limpeza de casa - pesada'
                    city='São José de Piranhas'
                    preco='R$ 400,00'
                    image={require('../../../assets/chupeta.png')}
                    key={1}>

                </BlocoAnuncioCliente>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}