import { View, Text, Image, Button, Alert } from 'react-native';
import { CustomButton } from '../../components/ButtonXL';
import { styles } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { globalTheme } from '../../global/styles/themes';
import { ButtonVoltar } from '../../components/ButtonVoltar';

export function SelectUser() {
   
    const navigation = useNavigation()
    const prestador = () => {
        navigation.navigate('CreatePrestador');
    };
    const cliente = () => {
        navigation.navigate('CreateCliente');
    };
    
    return (
        <View style={styles.container}>
            
            <View style={styles.buttonVoltar}>
               <ButtonVoltar/>
            </View>
            <View style={styles.align}>
                <Text style={styles.text}> Tipo de usuário</Text>
                <CustomButton
                    title="Prestador de serviço"
                    onPress={prestador}
                    color='#564CAF'
                    textColor='white'
                />
                <CustomButton
                    title="Cliente"
                    onPress={cliente}
                    color='#564CAF'
                    textColor='white'
                />
            </View>
        </View>
    )
}