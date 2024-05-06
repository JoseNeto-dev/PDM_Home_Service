import { View, Text, Image, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/Button';

export function CreateCliente() {
    const handlePress = () => {
        Alert.alert('Left button pressed');
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerGroup}>
                <Text style={styles.text}> Insira seus dados</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nome completo'
                    placeholderTextColor='#9089CB'
                // onChangeText={text => setNameParticipant(text)}
                // value={nameParticipant}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    placeholderTextColor='#9089CB'
                // onChangeText={text => setNameParticipant(text)}
                // value={nameParticipant}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Senha'
                    placeholderTextColor='#9089CB'
                // onChangeText={text => setNameParticipant(text)}
                // value={nameParticipant}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Telefone'
                    placeholderTextColor='#9089CB'
                // onChangeText={text => setNameParticipant(text)}
                // value={nameParticipant}
                />
                <TextInput
                    style={styles.input}
                    placeholder='CPF'
                    placeholderTextColor='#9089CB'
                // onChangeText={text => setNameParticipant(text)}
                // value={nameParticipant}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Endereço'
                    placeholderTextColor='#9089CB'
                // onChangeText={text => setNameParticipant(text)}
                // value={nameParticipant}
                />
                <View>
                    <CustomButton
                        title="Cadastrar"
                        onPress={handlePress}
                        containerStyle={styles.buttonContainerType1}
                        titleStyle={styles.buttonTitleType1}
                    />
                </View>
            </View>
        </View>
    )
}