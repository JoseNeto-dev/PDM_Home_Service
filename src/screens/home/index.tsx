import { View, Text, Image, Button, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/Button';

export function Home() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerGroup}>
                <Image
                    source={require('../../../assets/logo.png')}
                    style={styles.logo}
                />
                <Text style={styles.title}> Home Services</Text>
                <CustomButton
                    title="Entrar"
                    onPress={handlePress}
                    containerStyle={styles.buttonContainerType1}
                    titleStyle={styles.buttonTitleType1}
                />
                <CustomButton
                    title="Cadastrar"
                    onPress={() => Alert.alert('Left button pressed')}
                    containerStyle={styles.buttonContainerType2}
                    titleStyle={styles.buttonTitleType2}
                />
            </View>
        </View>
    )
}