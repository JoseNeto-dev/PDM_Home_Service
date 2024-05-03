import { View, Text, Image } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/Button';

export function Home() {
    const handlePress = () => {
        console.log('Botão pressionado');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}> Home Services</Text>
            <CustomButton
                title="Entrar"
                onPress={handlePress}
                containerStyle={styles.buttonContainer}
                titleStyle={styles.buttonTitle}
            />
        </View>
    )
}