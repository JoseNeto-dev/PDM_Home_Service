import React, { useState } from 'react';
import { View, Image, Alert, ViewStyle, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonSM';
import { ConfirmModal } from '../../components/ModalConfirmation';

const nome = 'Danrlei de Lira Silva';
const email = 'danrlei@gmail.com';
const telefone = '(83) 99999-9999';
const cpf = '123.456.789-0';
const endereco = 'Rua dos bobos - 0';

export function ProfileCliente() {
    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    const handleDeletePress = () => {
        setModalVisible(true);
    };

    const confirmDelete = () => {
        setModalVisible(false);
        console.log('Perfil deletado!');
        Alert.alert('Perfil deletado com sucesso!');
    };

    const handleChangePhotoPress = () => {
        Alert.alert('Funcionalidade de upload de imagem em desenvolvimento.');
    };

    const handleEditPress = () => {
        navigation.navigate('UpdateCliente');  // Navegue para a tela de edição
    };

    return (
        <View style={styles.container}>
            {/* view das imagens */}
            <View style={styles.imageView}>
                <Image 
                    source={require('../../../assets/profileIcon.png')}
                    style={styles.profile}
                />
                <TouchableOpacity onPress={handleChangePhotoPress}>
                    <Text style={styles.editProfile}> 
                        Alterar Foto
                    </Text>
                </TouchableOpacity>
            </View>

            {/* view dos textos das informações */}
            <View style={styles.informations}>
                <View style={styles.separator}>
                    <Text style={styles.textBold}> Nome:</Text>
                    <Text style={styles.textInformation}> {nome} </Text>
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

            {/* view dos botões */}
            <View style={styles.buttons}>
                <CustomButton
                    title="Editar"
                    onPress={handleEditPress}  // Altere a função onPress para navegar
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

            {/* Modal de Confirmação */}
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

const Separator = () => <View style={separatorStyle} />
