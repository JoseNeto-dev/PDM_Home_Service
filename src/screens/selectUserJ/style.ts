import { StyleSheet } from 'react-native';
import { globalTheme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 70,
        backgroundColor: globalTheme.COLORS.purple300,
        height: '100%',
        alignItems: 'center', // Alinhar itens no centro horizontalmente
        justifyContent: 'center', // Alinhar itens no centro verticalmente
    },
    buttonVoltar: {
        position: 'absolute', // Remove o botão do fluxo normal
        top: "5%", // Ajuste este valor para posicionar o botão mais alto ou mais baixo na tela
        left: 15, // Ajuste este valor para posicionar o botão mais à esquerda
        zIndex: 1, // Garante que o botão fique sobre outros elementos, se necessário
    },
    text: {
        color: globalTheme.COLORS.purple700,
        fontSize: globalTheme.SIZE.sm,
        marginBottom: 25,
        fontFamily: globalTheme.FONTS.regular
    },
    align:{
        alignItems: 'center',
        justifyContent: 'center',
    },
})