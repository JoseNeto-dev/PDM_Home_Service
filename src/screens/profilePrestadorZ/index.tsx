import { View, Image, Alert, ViewStyle } from 'react-native';
import { useCallback } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { styles } from './styles'
import { Divider, Text } from 'react-native-paper';
import { CustomButton } from '../../components/ButtonSM';
import * as ImagePicker from 'expo-image-picker';

import { globalTheme } from '../../global/styles/themes';
import { useState } from 'react';
import { ConfirmModal } from '../../components/ModalConfirmation';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { api } from '../../api';
import { PrestadorDTO } from '../../dto/GetPrestadorDTO';
import { configIp } from '../../api/config/configIp';
import { substituirLocalhostPorIp } from '../../api/config/converterIP';


export function ProfilePrestador() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [disponibilidade, setDisponibilidade] = useState('');
    const [foto, setFoto] = useState('');

    const [dadosAnuncios, setDadosAnuncios] = useState('');
    const [carregando, setCarregando] = useState<boolean>(false);
  
    const navigation = useNavigation()

    const buscarDadosPrestador = async () => {
        try {
            setCarregando(true);
            const response = await api.get('/prestadorPerfil');
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
        navigation.navigate("UpdateProfilePrestador")
    };

    const confirmDelete = async () => {
        setModalVisible(false);
        try{
            const deletar = await api.delete("/prestador")
            console.log('Perfil deletado!');
            Alert.alert('Perfil deletado com sucesso!');
            navigation.navigate("Home")
        }
        catch {

        }
    };

    const [isModalVisible, setModalVisible] = useState(false);

      const pickImage = async () => {
        // Solicita permissões para acessar a galeria de fotos
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
            setFoto(result.assets[0].uri); // define a URI da imagem selecionada
        }

        uploadImage();



    };
    const uploadImage = async () => {
        if (!foto) {
          Alert.alert('Erro', 'Nenhuma imagem selecionada.');
          return;
        }
      
        const formData = new FormData();
        
        formData.append('file', {
            uri: foto,      // URI da imagem
            name: 'profile.jpg',  // Nome da imagem (pode alterar dinamicamente)
            type: 'image/jpeg',   // Tipo da imagem
          } as any);  // Forçando o tipo para aceitar a estrutura correta
      
        try {
          const response = await api.put('/prestadorFoto', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
      
          console.log('Foto enviada com sucesso:', response.data);
          Alert.alert('Sucesso', 'Foto atualizada com sucesso!');
        } catch (error) {
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

            {/* view dos textos das informações */}
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

            {/* view dos botões */}
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
            {/* view das imagens */}

        </View>
    )
}

const separatorStyle: ViewStyle = {
    height: 4, width: '100%', backgroundColor: 'black'
}

const Separator = () => <View style={separatorStyle} />