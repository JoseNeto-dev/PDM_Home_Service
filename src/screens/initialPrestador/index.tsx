import { View, Text, Image, Button, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { BlocoAnuncio } from '../../components/BlocoAnuncio';

export function InitialPrestador() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    const localImage = require('../../../assets/eletricidade.png');
    return (
        <View style={styles.container}>
            <BlocoAnuncio
                namePrestador='Jaqueline Pereira da Silva'
                onPress={handlePress}
                title='Limpeza de casa - pesada'
                preco='R$ 400,00'
                image={require('../../../assets/chupeta.png')}
                key={1}>

            </BlocoAnuncio>
           
            <BlocoAnuncio
                namePrestador='Jaqueline Pereira da Silva'
                onPress={handlePress}
                title='Limpeza de casa - pesada'
                preco='R$ 400,00'
                image={localImage}
                key={1}>

            </BlocoAnuncio>
            <BlocoAnuncio
                namePrestador='Jaqueline Pereira da Silva'
                onPress={handlePress}
                title='Limpeza de casa - pesada'
                preco='R$ 400,00'
                image={require('../../../assets/fisioterapia.png')}
                key={1}>

            </BlocoAnuncio>
            <BlocoAnuncio
                namePrestador='Jaqueline Pereira da Silva'
                onPress={handlePress}
                title='Limpeza de casa - pesada'
                preco='R$ 400,00'
                image={localImage}
                key={1}>

            </BlocoAnuncio>

        </View>)


}