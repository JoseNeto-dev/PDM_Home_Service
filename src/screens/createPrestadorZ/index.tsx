import { styles } from './styles';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { CustomButton } from '../../components/ButtonXL';
import { ButtonVoltar } from '../../components/ButtonVoltar';

export function CreatePrestador() {
    const [markerCoordinate, setMarkerCoordinate] = useState({
        latitude: -6.888765940097697, // Coordenadas iniciais
        longitude: -38.55928242075309,
    });

    // Função chamada quando o marcador é arrastado
    const handleMarkerDragEnd = (event: {
        nativeEvent: {
            coordinate: {
                latitude: number;
                longitude: number;
            };
        };
    }) => {
        setMarkerCoordinate(event.nativeEvent.coordinate);
    };

    const handleSave = () => {
        Alert.alert('Localização', `Latitude: ${markerCoordinate.latitude}\nLongitude: ${markerCoordinate.longitude}`);
        // Aqui você pode enviar a localização para um servidor
        // Exemplo: axios.post('/api/save-location', markerCoordinate);
    };

    const [location, setLocation] = useState<LocationObject | null>(null);

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentLocation = await getCurrentPositionAsync();
            setLocation(currentLocation);

            console.log("dados", currentLocation);
        }
    }

    useEffect(() => {
        requestLocationPermissions();
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [address, setAddress] = useState('');

    const handleDeletePress = () => {
        setModalVisible(true);
    };

    const confirmDelete = () => {
        setModalVisible(false);
        console.log('Perfil deletado!');
        Alert.alert('Perfil deletado com sucesso!');
    };

    const [isModalVisible, setModalVisible] = useState(false);


    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false} // Oculta a barra de rolagem vertical
                showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem horizontal
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.align}>
                    <Text style={styles.text}>Insira seus dados</Text>
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
                        placeholder='CNPJ       '
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
                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: markerCoordinate.latitude,
                                longitude: markerCoordinate.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <Marker
                                coordinate={markerCoordinate}
                                draggable
                                onDragEnd={handleMarkerDragEnd} // Atualiza a posição quando arrastado
                            />
                        </MapView>
                    </View>
                    <View style={{
                        margin: 10
                    }}>
                        <CustomButton
                            title="Cadastrar"
                            onPress={handleSave}
                            color='#564CAF'
                            textColor='white'
                        />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}