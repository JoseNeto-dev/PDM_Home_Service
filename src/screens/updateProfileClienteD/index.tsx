import { View, Text, TextInput, Alert, ScrollView } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonLG';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../api';
import { AuthContext } from '../../contextS/Auth';

export function UpdateCliente() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [address, setAddress] = useState('');

    const navigation = useNavigation();
    const authData = useContext(AuthContext);

    // Função para buscar dados do cliente
    const buscarDadosCliente = async () => {
        try {
            const response = await api.get('/clientePerfil', {
                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email,
                },
            });

            setName(response.data.nome);
            setPhone(response.data.telefone);
            setCpf(response.data.cpf);
            setAddress(response.data.endereco);
        } catch (error) {
            console.error('Erro ao carregar dados do perfil!', error);
            Alert.alert('Erro ao carregar dados do perfil!');
        }
    };

    useEffect(() => {
        buscarDadosCliente();
    }, []);

    const salvarCliente = async () => {
        try {
            const cliente = {
                nome: name,
                telefone: phone,
                cpf: cpf,
                endereco: address,
            };

            const response = await api.put('/cliente', cliente, {
                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email,
                },
            });

            if (response.status === 200 || response.status === 201) {
                setName('');
                setPhone('');
                setCpf('');
                setAddress('');
                navigation.navigate('ProfileCliente');
                Alert.alert('Perfil atualizado com sucesso!');
            }
        } catch (error: any) {
            console.error('Erro ao atualizar perfil:', error);
            if (error.response && error.response.data && error.response.data.error) {
                Alert.alert('Erro', error.response.data.error);
            } else {
                Alert.alert('Erro', 'Ocorreu um erro ao tentar atualizar o perfil.');
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <View style={styles.align}>
                    <Text style={styles.text}>Edite seus dados</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome completo"
                        placeholderTextColor="#9089CB"
                        onChangeText={setName}
                        value={name}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Telefone"
                        placeholderTextColor="#9089CB"
                        onChangeText={setPhone}
                        value={phone}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CPF"
                        placeholderTextColor="#9089CB"
                        onChangeText={setCpf}
                        value={cpf}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço"
                        placeholderTextColor="#9089CB"
                        onChangeText={setAddress}
                        value={address}
                    />
                    <View>
                        <CustomButton
                            title="Salvar"
                            onPress={salvarCliente}
                            color="#564CAF"
                            textColor="white"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
