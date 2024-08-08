import { StyleSheet } from 'react-native';
import { globalTheme } from '../../global/styles/themes';
import { color } from '@rneui/themed/dist/config';

export const blocoAnuncioStyles = StyleSheet.create({
    container: {
        height: 112,
        width: 370,
        flexDirection: 'row',
        borderColor: globalTheme.COLORS.purple700,
        borderRadius: 20,
        backgroundColor: globalTheme.COLORS.white,
        borderWidth: 2,
        paddingLeft: 28, // Adiciona espaçamento à esquerda
        alignItems: 'center', // Centraliza verticalmente os conteúdos na linha
        gap: 20,
        margin: 5

    },
    description: {
        fontSize: globalTheme.SIZE.sm,
        fontFamily: globalTheme.FONTS.bold,
        color: globalTheme.COLORS.purple700
    },
    content: {
        fontSize: globalTheme.SIZE.sm,
        fontFamily: globalTheme.FONTS.regular,
        color: globalTheme.COLORS.purple700
    },
    textName: {
        width: '60%'
    },
    image: {
        width: 50,
        height: 50,
    },
    textContainer: {
        flex: 1, // Ocupa o espaço restante entre o ícone e as ações
        justifyContent: 'center',
        position: 'relative', // Posição relativa para referência
        zIndex: 1,
        gap:1

    },
    iconView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap: 10,
        marginTop: 30,
        marginEnd: 20,
        position: 'absolute', // Posição absoluta para sobreposição
        zIndex: 2,
        left: '78%',
        top: '22%'
    },
    icons: {
        backgroundColor: globalTheme.COLORS.purple200,
        borderRadius: 20,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});