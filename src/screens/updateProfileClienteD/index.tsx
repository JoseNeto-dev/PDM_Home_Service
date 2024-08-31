import { View, Text, Image, TextInput, Alert } from 'react-native';
import {styles} from './styles';
import { CustomButton } from '../../components/ButtonLG';
import { useState } from 'react';
import { ButtonVoltar } from '../../components/ButtonVoltar';

export function UpdateCliente() {
    const handlePress = () => {
        Alert.alert ('Left button pressed');
    };

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [address, setAddress] = useState('');

    return (
        <View style ={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>
            <View style = {styles.align}>

                <Text style = {styles.text}>Edite seus dados</Text>
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
                <View>
                    <CustomButton
                        title="Salvar"
                        onPress={handlePress}
                        color='#564CAF'
                        textColor='white'
                    />
                </View>
            </View>
        </View>
    )
}