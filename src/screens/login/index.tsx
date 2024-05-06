import { View, Text, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';


export function Login() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    return (
        <View style={styles.container}>

            {/* view logo-title */}
            <View style={styles.align}>
                <View style={styles.align}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}> Home Services</Text>
                </View>

                {/* view input */}
                <View style={styles.alignInput}>
                    <TextInput
                        style={styles.input}
                        placeholder='Email'
                        placeholderTextColor='#9089CB'
                    // onChangeText={text => setNameParticipant(text)}
                    // value={nameParticipant}
                    />
                    <View style={styles.security}>
                        <TextInput
                            style={styles.inputSecurity}
                            placeholder='Senha'
                            placeholderTextColor='#9089CB'
                            secureTextEntry={true}
                        // onChangeText={text => setNameParticipant(text)}
                        // value={nameParticipant}
                        />
                        <TouchableOpacity style={styles.eyeSecurity}>
                            <Ionicons name='eye' color={"#9089CB"} size={25} />
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomButton
                    title="Entrar"
                    onPress={handlePress}
                    containerStyle={styles.buttonContainerType1}
                    titleStyle={styles.buttonTitleType1}
                />
            </View>

        </View>
    )
}