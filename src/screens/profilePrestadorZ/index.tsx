import { View, Image, Alert, ViewStyle } from 'react-native';
import { useCallback, useContext, useState } from 'react';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { Text } from 'react-native-paper';
import { CustomButton } from '../../components/ButtonSM';
import * as ImagePicker from 'expo-image-picker';
import { ConfirmModal } from '../../components/ModalConfirmation';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { api } from '../../api';
import { configIp } from '../../api/config/configIp';
import { substituirLocalhostPorIp } from '../../api/config/converterIP';
import { AuthContext } from '../../contextS/Auth';

export function ProfilePrestador() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [foto, setFoto] = useState('');
    const [carregando, setCarregando] = useState<boolean>(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();
    const authData = useContext(AuthContext);

    const buscarDadosPrestador = async () => {
        try {
            setCarregando(true);
            const response = await api.get('/prestadorPerfil', {
                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email
                }
            });
            setName(response.data.name);
            setEmail(response.data.email);
            setPhone(response.data.telefone);
            setCnpj(response.data.cnpj);
            setDisponibilidade(response.data.horarioDisponibilidade);
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
            buscarDadosPrestador();
        }, [])
    );

    const handleDeletePress = () => {
        setModalVisible(true);
    };

    const handleUptdatePress = () => {
        navigation.navigate("UpdateProfilePrestador");
    };

    const confirmDelete = async () => {
        setModalVisible(false);
        try {
            await api.delete("/prestador", {
                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email
                }
            });
            console.log('Perfil deletado!');
            Alert.alert('Perfil deletado com sucesso!');
            authData.logOut();
        } catch (error) {
            console.error('Erro ao deletar perfil:', error);
        }
    };

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert('Permissão necessária', 'Precisamos de permissão para acessar sua galeria!');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });

        if (!result.canceled) {
            const newPhotoUri = result.assets[0].uri; // Nova URI da imagem
            setFoto(newPhotoUri); // Atualiza o estado com a nova URI
            console.log('URI da foto selecionada:', newPhotoUri); // Imprime a nova URI no console

            // Chama uploadImage com a nova URI
            await uploadImage(newPhotoUri);
        }
    };

    const uploadImage = async (newUri: string) => {
        if (!newUri) {
            Alert.alert('Erro', 'Nenhuma imagem selecionada.');
            return;
        }

        const formData = new FormData();
        const dateUpload = Date.now();

        formData.append('file', {
            name: `profile-${dateUpload}.jpg`,  // Nome da imagem
            type: 'image/jpg',   // Tipo da imagem
            uri: newUri // URI da nova imagem
        } as any);

        try {
            const response = await api.put('/prestadorFoto', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email,
                },
            });

            console.log('Foto enviada com sucesso:', response.data);
            Alert.alert('Sucesso', 'Foto atualizada com sucesso!');
        } catch (error) {
            console.error('Erro ao enviar a foto:', error);
            Alert.alert('Erro', 'Falha ao enviar a foto.');
        }
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
                    <Text style={styles.textInformation}> {phone} </Text>
                </View>
                <View style={styles.separator}>
                    <Text style={styles.textBold}> CNPJ:</Text>
                    <Text style={styles.textInformation}> {cnpj} </Text>
                </View>
                <View style={styles.separator}>
                    <Text style={styles.textBold}> Horário:</Text>
                    <Text style={styles.textInformation}> {disponibilidade} </Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <CustomButton
                    title="Editar"
                    onPress={handleUptdatePress}
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
    height: 4, width: '100%', backgroundColor: 'black'
}

const Separator = () => <View style={separatorStyle} />;