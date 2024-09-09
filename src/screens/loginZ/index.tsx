import { View, Text, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { Ionicons } from '@expo/vector-icons';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { useNavigation } from '@react-navigation/native';
import { LoginCLiente } from '../../dto/usuarioLoginDTO';
import { api } from '../../api';


export function Login() {

    const navigation = useNavigation();

    const loginUsuario = async () => {
        try {
            console.log("olá");
            const usuario: LoginCLiente = {
                email: email,
                senha: password,
            };
            
            // Enviando o cliente para a API
            const response = await api.post('/login', usuario);
            console.log(response.data);

            
            if (response.status === 200) {
                console.log('Seja bem vindo!');
                Alert.alert('Seja bem vindo!');
                // navigation.navigate("InitialCliente"); // Navega para a tela inicial do cliente após sucesso
            } 
        } catch (error: any) {
            // Exibindo uma mensagem de erro apropriada
            if (error.response && error.response.data && error.response.data.error) {
              Alert.alert('Erro', error.response.data.error);
            } else {
              Alert.alert('Erro', 'Ocorreu um erro ao tentar cadastrar o cliente.');
            }
          }
    };

    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hide, setHide] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>

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
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                    />
                    <View style={styles.security}>
                        <TextInput
                            style={styles.inputSecurity}
                            placeholder='Senha'
                            placeholderTextColor='#9089CB'
                            secureTextEntry={hide}
                            onChangeText={(text) => setPassword(text)}
                            value={password}

                        />
                        <TouchableOpacity style={styles.eyeSecurity} onPress={() => setHide(!hide)}>
                            {hide ?
                                <Ionicons name='eye' color={"#9089CB"} size={25} />

                                :
                                <Ionicons name='eye-off' color={"#9089CB"} size={25} />
                            }
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomButton
                    title="Entrar"
                    onPress={loginUsuario}
                    color='#564CAF'
                    textColor='white'
                />
            </View>

        </View>
    )
}