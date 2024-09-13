import { StyleSheet } from 'react-native';
import { globalTheme } from '../../global/styles/themes';
import { color } from '@rneui/themed/dist/config';

export const blocoAnuncioStyles = StyleSheet.create({
    container: {
        height: 145,
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
        width: '70%'
    },
    image: {
        width: 50,
        height: 50,
    },
    textContainer: {
        justifyContent: 'center',
        position: 'relative', // Posição relativa para referência
        zIndex: 1,
        gap:1,
        width: 340
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
        left: 300,
        top: 48
    },
    icons: {
        backgroundColor: globalTheme.COLORS.purple700,
        width: 30,
        height: 30,
        borderRadius: 25,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});