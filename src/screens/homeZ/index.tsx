import { View, Text, Image, Button, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';

export function Home() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.align}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}> Home Services</Text>
                <CustomButton
                    title="Entrar"
                    onPress={handlePress}
                    color='#564CAF'
                    textColor='white'
                />
                <CustomButton
                    title="Cadastrar"
                    onPress={() => Alert.alert('Left button pressed')}
                    color='#ffff'
                    textColor='#564CAF'
                    borderColor='#564CAF'
                    borderWidth={0.5}
                />
            </View>
        </View>
    )
}