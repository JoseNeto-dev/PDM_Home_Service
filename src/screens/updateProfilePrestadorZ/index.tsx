import { View, Text, Image, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { useState } from 'react';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { useNavigation } from '@react-navigation/native';
import { PrestadorDTO } from '../../dto/GetPrestadorDTO';
import { PostPrestadorDTO } from '../../dto/PostPrestadorDTO';
import { api } from '../../api';

export function UpdateProfilePrestador() {

    const updateCliente = async () => {
        try {
            const prestadorAtualizado =  {
                nome: name,
                telefone: phone,
                cnpj: cnpj,
                horarioDisponibilidade: availability,
            };

            const response = await api.put('/prestador', prestadorAtualizado);
        
        // Enviando o cliente para a API
        
        if (response.status === 201) {
            console.log('Cliente cadastrado com sucesso!');
            Alert.alert('Cliente cadastrado com sucesso!');
            navigation.navigate("Login"); // Navega para a tela de login após sucesso
            }
        } catch (error: any) {
            console.log("Olá");
            // Exibindo uma mensagem de erro apropriada
            // if (error.response && error.response.data && error.response.data.error) {
            //     Alert.alert('Erro', error.response.data.error);
            // } else {
            //     Alert.alert('Erro', 'Ocorreu um erro ao tentar cadastrar o cliente.');
            // }
        }
    };

    const navigation = useNavigation();


    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [availability, setAvailability] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>
            <View style={styles.align}>
                <Text style={styles.text}> Edite seus dados</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nome completo'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setName(text)}
                    value={name}
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
                    placeholder='CNPJ'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setCnpj(text)}
                    value={cnpj}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Horário de disponibilidade'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setAvailability(text)}
                    value={availability}
                />
            </View>
            <View>
                    <CustomButton
                        title="Salvar"
                        onPress={updateCliente}
                        color='#564CAF'
                        textColor='white'
                    />
                </View>
        </View>
    )
}