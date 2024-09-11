import { View, Text, Image, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { useNavigation } from '@react-navigation/native';
import { SelectUser } from '../selectUserJ';
import { Login } from '../loginZ';

export function Home() {

    const navigation = useNavigation();

    const entrar = () => {
        navigation.navigate("Login") 
    };

    const cadastrar = () => {
        navigation.navigate("SelectUser") 
    };
    

    return (
        <View style={styles.container}>
            <View style={styles.align}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}>Home Services</Text>
                <CustomButton
                    title="Entrar"
                    onPress={entrar}
                    color='#564CAF'
                    textColor='white'
                />
                <CustomButton
                    title="Cadastrar"
                    onPress={cadastrar}
                    color='#fff'
                    textColor='#564CAF'
                    borderColor='#564CAF'
                    borderWidth={0.5}
                />
            </View>
        </View>
    )
}
