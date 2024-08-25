import { View, Text, Image, TextInput, Alert } from 'react-native';
import {styles} from './styles';
import { CustomButton } from '../../components/ButtonLG';
import { useState } from 'react';

export function CreateAnuncio() {
    const handlePress = () => {
        Alert.alert ('Left button pressed');
    };

    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [servico, setServico] = useState('');
    const [categoria, setCategoria] = useState ('');

    return (
        <View style ={styles.container}>
            <View style = {styles.align}>
                <Text style = {styles.text}>Criar Anúncio</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Título'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setTitulo(text)}
                    value={titulo}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Descrição'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setDescricao(text)}
                    value={descricao}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Preço'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setPreco(text)}
                    value={preco}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Serviço'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setServico(text)}
                    value={servico}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Categoria'
                    placeholderTextColor='#9089CB'
                    onChangeText={(text) => setCategoria(text)}
                    value={categoria}
                />
                <View>
                    <CustomButton
                        title="Criar"
                        onPress={handlePress}
                        color='#564CAF'
                        textColor='white'
                    />
                </View>
            </View>
        </View>
    )
}