import { View, Text, Image, Button, Alert } from 'react-native';
import { CustomButton } from '../../components/Button';
import { styles } from './style';


export function SelectUser() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerGroup}>
                <Text style={styles.title}> Tipo de usuário</Text>
                <CustomButton
                    title="Prestador de serviço"
                    onPress={handlePress}
                    containerStyle={styles.buttonContainerType3}
                    titleStyle={styles.buttonTitleType3}
                />
                <CustomButton
                    title="Cliente"
                    onPress={() => Alert.alert('Left button pressed')}
                    containerStyle={styles.buttonContainerType3}
                    titleStyle={styles.buttonTitleType3}
                />
            </View>
        </View>
    )
}