import { View, Image, Button, Alert, ViewStyle } from 'react-native';
import { styles } from './styles'
import { Divider, Text } from 'react-native-paper';
import { CustomButton } from '../../components/ButtonSM';

import { globalTheme } from '../../global/styles/themes';
import { useState } from 'react';
import { ConfirmModal } from '../../components/ModalConfirmation';
import { ButtonVoltar } from '../../components/ButtonVoltar';


const nome = 'Joyce dos Santos Silva';
const email = 'joyce@gmail.com';
const telefone = '(83) 99999-9999';
const cnpj = '12.345.678/0001-00';
const horario = '12h às 19h';

export function ProfilePrestador() {
    const handleDeletePress = () => {
        setModalVisible(true);
    };

    const confirmDelete = () => {
        setModalVisible(false);
        console.log('Perfil deletado!');
        Alert.alert('Perfil deletado com sucesso!');
    };

    const [isModalVisible, setModalVisible] = useState(false);

    const handlePress = () => {
        Alert.alert('Left button pressed');
    };
    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar/>
            </View>
            {/* view das imagens */}
            <View style={styles.imageView}>
                <Image
                    source={require('../../../assets/jesus.png')}
                    style={styles.profile}
                />
                <Text style={styles.editProfile}>
                    Alterar Foto
                </Text>

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
                    <Text style={styles.textBold}> CNPJ:</Text>
                    <Text style={styles.textInformation}> {cnpj} </Text>
                </View>
                <View style={styles.separator}>
                    <Text style={styles.textBold}> Horário:</Text>
                    <Text style={styles.textInformation}> {horario} </Text>
                </View>
            </View>

            {/* view dos botões */}
            <View style={styles.buttons}>
                <CustomButton
                    title="Editar"
                    onPress={() => Alert.alert('Left button pressed')}
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
    )
}

const separatorStyle: ViewStyle = {
    height: 4, width: '100%', backgroundColor: 'black'
}

const Separator = () => <View style={separatorStyle} />