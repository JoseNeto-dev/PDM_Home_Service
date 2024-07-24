import { View, Text, Image, Button, Alert } from 'react-native';
import { CustomButton } from '../../components/ButtonXM';
import { styles } from './style';


export function SelectUser() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.align}>
                <Text style={styles.text}> Tipo de usuário</Text>
                <CustomButton
                    title="Prestador de serviço"
                    onPress={handlePress}
                    color='#564CAF'
                    textColor='white'
                />
                <CustomButton
                    title="Cliente"
                    onPress={() => Alert.alert('Left button pressed')}
                    color='#564CAF'
                    textColor='white'
                />
            </View>
        </View>
    )
}