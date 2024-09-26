import { styles } from './styles';
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync, LocationObject } from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { CustomButton } from '../../components/ButtonXL';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { useNavigation } from '@react-navigation/native';
import { PutPrestadorDTO } from '../../dto/PutPrestadorDTO';
import { api } from '../../api';
import { AuthContext } from '../../contextS/Auth';

export function UpdateProfilePrestador() {

    const navigation = useNavigation()
    const authData = useContext(AuthContext);

    const salvarPrestador = async () => {
        try {
            const prestador: PutPrestadorDTO = {
                nome: name,
                telefone: phone,
                horarioDisponibilidade: disponibilidade,
                latitude: markerCoordinate.latitude,
                longitude: markerCoordinate.longitude
            };

            // Enviando o cliente para a API
            const response = await api.put<PutPrestadorDTO>('/prestador', prestador, {

                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email
                }

            });

            if (response.status === 200 || response.status === 201) {
                setName('');
                setPhone('');
                setDisponibilidade('');
                navigation.navigate("ProfilePrestador"); // Navega para a tela de login após sucesso
                console.log('Prestador atualizado com sucesso!');
                Alert.alert('Prestador atualizado com sucesso!');
            }
        } catch (error: any) {
            console.error('Error details:', error); // Verifique detalhes do erro no console
            if (error.response && error.response.data && error.response.data.error) {
                Alert.alert('Erro', error.response.data.error);
            } else {
                Alert.alert('Erro', 'Ocorreu um erro ao tentar cadastrar o cliente.');
            }
        }

    };

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

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync();

        if (granted) {
            const currentLocation = await getCurrentPositionAsync();
            setMarkerCoordinate({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
            });
        } else {
            Alert.alert('Permissão Negada', 'Precisamos de sua permissão para acessar sua localização.');
        }
    }

    useEffect(() => {
        requestLocationPermissions();
    }, []);

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false} // Oculta a barra de rolagem vertical
                showsHorizontalScrollIndicator={false} // Oculta a barra de rolagem horizontal
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.align}>
                    <Text style={styles.text}>Edite seus dados</Text>
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
                        placeholder='Horário de Disponibilidade'
                        placeholderTextColor='#9089CB'
                        onChangeText={(text) => setDisponibilidade(text)}
                        value={disponibilidade}
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
                            title="Salvar"
                            onPress={salvarPrestador}
                            color='#564CAF'
                            textColor='white'
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}