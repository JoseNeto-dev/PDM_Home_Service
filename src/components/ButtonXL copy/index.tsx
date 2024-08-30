import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export function MapWithMovableMarker() {
    // Estado para manter a posição do marcador
    const [markerCoordinate, setMarkerCoordinate] = useState({
        latitude: 37.78825, // Coordenadas iniciais
        longitude: -122.4324,
    });

    // Função chamada quando o marcador é arrastado
    const handleMarkerDragEnd = (event: {
            nativeEvent: {
                coordinate: React.SetStateAction<{
                    latitude: number; // Coordenadas iniciais
                    longitude: number;
                }>;
            };
        }) => {
        setMarkerCoordinate(event.nativeEvent.coordinate);
    };

    // Função chamada ao pressionar o botão "Salvar"


    return (
        <View style={styles.container}>
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
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 20,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
});
