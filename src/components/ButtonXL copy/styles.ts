import { StyleSheet } from 'react-native';
import { globalTheme } from '../../global/styles/themes';
export const buttonStyles = StyleSheet.create({
    container: {
        borderRadius: 30,
        marginBottom: 10,
        position: 'relative',
        width: 300,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: globalTheme.SIZE.sm,
        fontFamily: globalTheme.FONTS.regular,
    },
});



