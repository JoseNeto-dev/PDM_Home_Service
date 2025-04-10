import React, { useState, useContext, useCallback } from 'react';
import { View, Image, Alert, ViewStyle } from 'react-native';
import { Text } from 'react-native-paper';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonSM';
import { ConfirmModal } from '../../components/ModalConfirmation';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import * as ImagePicker from 'expo-image-picker';
import { api } from '../../api';
import { AuthContext } from '../../contextS/Auth';
import { configIp } from '../../api/config/configIp';
import { substituirLocalhostPorIp } from '../../api/config/converterIP';

export function ProfileCliente() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [foto, setFoto] = useState('');

    const [carregando, setCarregando] = useState<boolean>(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();
    const authData = useContext(AuthContext);

    // Função para buscar os dados do cliente ao carregar a tela
    const buscarDadosCliente = async () => {
        try {
            setCarregando(true);
            const response = await api.get('/clientePerfil', {
                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email,
                },
            });

            setName(response.data.name);
            setEmail(response.data.email);
            setTelefone(response.data.telefone);
            setCpf(response.data.cpf);
            setEndereco(response.data.endereco);
            const fotoInicial = substituirLocalhostPorIp(response.data.foto, configIp.apiBaseUrl);
            setFoto(fotoInicial);
        } catch (error) {
            console.error('Erro ao carregar dados do perfil! :(', error);
            Alert.alert('Erro ao carregar dados do perfil! :(');
        } finally {
            setCarregando(false);
        }
    };

    useFocusEffect(
        useCallback(() => {
            buscarDadosCliente();
        }, [])
    );

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar sua galeria!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            const newPhotoUri = result.assets[0].uri;
            setFoto(newPhotoUri);
            await uploadImage(newPhotoUri);
        }
    };

    const uploadImage = async (newUri: string) => {
        if (!newUri) {
            Alert.alert('Erro', 'Nenhuma imagem selecionada.');
            return;
        }

        const formData = new FormData();
        formData.append('file', {
            uri: newUri,
            name: 'profile.jpg',
            type: 'image/jpeg',
        } as any);

        try {
            const response = await api.put('/clienteFoto', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email,
                },
            });

            console.log('Foto enviada com sucesso:', response.data);
            Alert.alert('Sucesso', 'Foto atualizada com sucesso!');
        } catch (error) {
            Alert.alert('Erro', 'Falha ao enviar a foto.');
        }
    };

    const confirmDelete = async () => {
        setModalVisible(false);
        try {
            await api.delete('/cliente', {
                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email,
                },
            });
            console.log('Perfil deletado!');
            Alert.alert('Perfil deletado com sucesso!');
            authData.logOut();
        } catch (error) {
            Alert.alert('Erro', 'Falha ao excluir o perfil.');
        }
    };

    const handleDeletePress = () => {
        setModalVisible(true);
    };

    const handleEditPress = () => {
        navigation.navigate('UpdateCliente');
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>

            <View style={styles.imageView}>
                {foto && <Image source={{ uri: foto }} style={styles.profile} />}
                <Text style={styles.editProfile} onPress={pickImage}>
                    Alterar Foto
                </Text>
            </View>

            <View style={styles.informations}>
                <View style={styles.separator}>
                    <Text style={styles.textBold}> Nome:</Text>
                    <Text style={styles.textInformation}> {name} </Text>
                </View>
                <View style={styles.separator}>
                    <Text style={styles.textBold}> Email:</Text>
                    <Text style={styles.textInformation}> {email} </Text>
                </View>
                <View style={styles.separator}>
                    <Text style={styles.textBold}> Telefone:</Text>
                    <Text style={styles.textInformation}> {telefone} </Text>
                </View>
                <View style={styles.separator}>
                    <Text style={styles.textBold}> CPF:</Text>
                    <Text style={styles.textInformation}> {cpf} </Text>
                </View>
                <View style={styles.separator}>
                    <Text style={styles.textBold}> Endereço:</Text>
                    <Text style={styles.textInformation}> {endereco} </Text>
                </View>
            </View>

            <View style={styles.buttons}>
                <CustomButton
                    title="Editar"
                    onPress={handleEditPress}
                    color='#ffff'
                    textColor='#564CAF'
                    borderColor='#564CAF'
                    borderWidth={0.5}
                />
                <CustomButton
                    title="Excluir"
                    onPress={handleDeletePress}
                    color='#564CAF'
                    textColor='white'
                />
            </View>

            <ConfirmModal
                visible={isModalVisible}
                onConfirm={confirmDelete}
                onClose={() => setModalVisible(false)}
                title={'Perfil'}
                message={'Deseja realmente excluir seu perfil?'}
            />
        </View>
    );
}

const separatorStyle: ViewStyle = {
    height: 4,
    width: '100%',
    backgroundColor: 'black',
};

const Separator = () => <View style={separatorStyle} />;
