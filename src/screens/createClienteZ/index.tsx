import { View, Text, Image, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ButtonVoltar } from '../../components/ButtonVoltar';

export function CreateCliente() {

    const navigation = useNavigation()


    const cadastrar = () => {
        navigation.navigate("Login")
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [address, setAddress] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>
            <View style={styles.align}>
                <Text style={styles.text}> Insira seus dados</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nome completo'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setName(text)}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Telefone'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setPhone(text)}
                    value={phone}
                />
                <TextInput
                    style={styles.input}
                    placeholder='CPF'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setCpf(text)}
                    value={cpf}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Endereço'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setAddress(text)}
                    value={address}
                />
            </View>
            <View>
                <CustomButton
                    title="Cadastrar"
                    onPress={cadastrar}
                    color='#564CAF'
                    textColor='white'
                />
            </View>
        </View>
    )
}