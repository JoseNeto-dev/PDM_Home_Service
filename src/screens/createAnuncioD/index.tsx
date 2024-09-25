import { View, Text, TextInput, Alert } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../components/ButtonLG';
import { useState, useEffect, useContext } from 'react';
import { ButtonVoltar } from '../../components/ButtonVoltar';
import { Picker } from '@react-native-picker/picker';
import { api } from '../../api';
import { AuthContext } from '../../contextS/Auth';
import { useNavigation } from '@react-navigation/native';
import { CategoriaDTO } from '../../dto/CategoriaDTO'; // Importe seu DTO de categoria

export function CreateAnuncio() {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [categoria, setCategoria] = useState('');
    const [categoriasDisponiveis, setCategoriasDisponiveis] = useState<CategoriaDTO[]>([]); // Estado para categorias

    const authData = useContext(AuthContext);
    const navigation = useNavigation();

    // Função para obter categorias da API
    const obterCategorias = async () => {
        try {
            const response = await api.get('/listCategorias', {
                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email,
                },
            });
            if (response.status === 200) {
                setCategoriasDisponiveis(response.data); // Assume que a resposta contém um array de categorias
            }
        } catch (error: any) {
            console.error('Erro ao obter categorias:', error);
            Alert.alert('Erro', 'Não foi possível carregar as categorias.');
        }
    };

    useEffect(() => {
        obterCategorias(); // Chama a função ao montar o componente
    }, []);

    const criarAnuncio = async () => {
        try {
            const anuncio = {
                titulo,
                descricao,
                preco,
                categoriaId: categoria // Supondo que a API espere o ID da categoria
            };

            const response = await api.post('/anuncio', anuncio, {
                headers: {
                    Authorization: `Bearer ${authData.authData?.token}`,
                    email: authData.authData?.email,
                },
            });

            if (response.status === 201) {
                setTitulo('');
                setDescricao('');
                setPreco('');
                setCategoria('');
                Alert.alert('Anúncio criado com sucesso!');
                navigation.navigate('InitialPrestador');
            }
        } catch (error: any) {
            console.error('Erro ao criar anúncio:', error);
            console.log('Detalhes do erro:', error.response ? error.response.data : error);
            if (error.response && error.response.data && error.response.data.error) {
                Alert.alert('Erro', error.response.data.error);
            } else {
                Alert.alert('Erro', 'Ocorreu um erro ao tentar criar o anúncio.');
            }
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonVoltar}>
                <ButtonVoltar />
            </View>
            <View style={styles.align}>
                <Text style={styles.text}>Criar Anúncio</Text>
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
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={categoria}
                        style={styles.picker}
                        onValueChange={(itemValue) => setCategoria(itemValue)}
                    >
                        <Picker.Item label="Selecione uma Categoria" value="" />
                        {categoriasDisponiveis.map((cat) => (
                            <Picker.Item
                                key={cat.id}
                                label={cat.servico}
                                value={cat.id} // Usar o id da categoria aqui
                            />
                        ))}
                    </Picker>
                </View>
                <View>
                    <CustomButton
                        title="Criar"
                        onPress={criarAnuncio}
                        color='#564CAF'
                        textColor='white'
                    />
                </View>
            </View>
        </View>
    );
}
