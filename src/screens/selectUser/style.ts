import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    container: {
        paddingHorizontal: 24,
        paddingTop: 70,
        backgroundColor: '#eae1fd',
        height: '100%',
        alignItems: 'center', // Alinhar itens no centro horizontalmente
        justifyContent: 'center', // Alinhar itens no centro verticalmente
    },
    text: {
        color: '#564caf',
        fontSize: 20,
        marginBottom: 25
    },
    align:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainerType3: {
        borderRadius: 30,
        overflow: 'hidden',
        backgroundColor: '#564CAF',
        margin: 10,
        width: 300,
        height: 60,
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    buttonTitleType3: {
        color: 'white',
        fontSize: 20,
    }
})