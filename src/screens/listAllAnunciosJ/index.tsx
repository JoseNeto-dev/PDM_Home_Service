import { View, Text, Image, Button, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { BlocoAnuncioCliente } from '../../components/BlocoAnuncioCliente';
import { Header } from '../../components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AntDesign from '@expo/vector-icons/AntDesign';
import { globalTheme } from '../../global/styles/themes';



export function ListAnuncios() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    return (
        <View style={styles.container}>
            {/* view de botao de voltar*/}
            <View style={styles.buttonVoltar}>
                <AntDesign name="arrowleft" size={24} color={globalTheme.COLORS.purple700} />
            </View>
            <BlocoAnuncioCliente
                namePrestador='Jaqueline Pereira da Silvadedededed'
                onPress={handlePress}
                title='Limpeza de casa - pesadadedede'
                city='São José de Piranhas'
                preco='R$ 400,00'
                image={require('../../../assets/chupeta.png')}
                key={1}>

            </BlocoAnuncioCliente>
        </View>
    )
}