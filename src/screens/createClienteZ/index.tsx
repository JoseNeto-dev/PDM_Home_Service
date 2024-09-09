import { View, Text, Image, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { api } from '../../api';
import { ClienteDTO } from '../../dto/ClienteDTO';

export function CreateCliente() {

    const navigation = useNavigation();

    const criarCliente = async () => {
        try {
            const cliente: ClienteDTO = {
                nome: name,
                email: email,
                senha: password,
                telefone: phone,
                cpf: cpf,
                endereco: address
            };

            // Enviando o cliente para a API
            const response = await api.post('/cliente', cliente);

            if (response.status === 201) {
                console.log('Cliente cadastrado com sucesso!');
                Alert.alert('Cliente cadastrado com sucesso!');
                navigation.navigate("Login"); // Navega para a tela de login após sucesso
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
                    onPress={criarCliente}
                    color='#564CAF'
                    textColor='white'
                />
            </View>
        </View>
    )
}