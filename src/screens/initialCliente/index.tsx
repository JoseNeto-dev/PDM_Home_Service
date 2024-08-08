import { View, Text, Image, Button, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { BlocoAnuncioCliente } from '../../components/BlocoAnuncioCliente';

export function InitialCliente() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    const localImage = require('../../../assets/eletricidade.png');
    return (
        <View style={styles.container}>
            <BlocoAnuncioCliente
                namePrestador='Jaqueline Pereira da Silva'
                onPress={handlePress}
                title='Limpeza de casa - pesada'
                city='São José de Piranhas'
                preco='R$ 400,00'
                image={require('../../../assets/chupeta.png')}
                key={1}>

            </BlocoAnuncioCliente>



        </View>)


}