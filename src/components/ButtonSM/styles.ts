import { StyleSheet } from 'react-native';
import { globalTheme } from '../../global/styles/themes';

export const buttonStyles = StyleSheet.create({
    container: {
        borderRadius: 30,
        overflow: 'hidden',
        marginBottom: 10,
        width: 155,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: globalTheme.SIZE.sm,
        fontFamily: globalTheme.FONTS.regular,
    },
});



