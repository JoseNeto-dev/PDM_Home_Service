import { View, Text, Image, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonXL';
import { useState } from 'react';

export function CreatePrestador() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [availability, setAvailability] = useState('');

    return (
        <View style={styles.container}>
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
                        title="Cadastrar"
                        onPress={handlePress}
                        color='#564CAF'
                        textColor='white'
                    />
                </View>
        </View>
    )
}