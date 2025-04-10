import { View, Text, Image, TextInput, Alert, TouchableOpacity } from 'react-native';
import { useContext, useState } from 'react';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { Ionicons } from '@expo/vector-icons';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../api';
import { AuthContext } from '../../contextS/Auth';


export function Login() {

    const authData = useContext(AuthContext);


    const loginUsuario = async () => {
        const retorno = await authData.signIn(email, password);
        
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