import { StyleSheet } from 'react-native';
import { globalTheme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 360,
        height: 190,
        padding: 10,
        borderWidth: 2,
        borderColor: globalTheme.COLORS.purple700,
        backgroundColor: globalTheme.COLORS.white,
        borderRadius: 25,
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: globalTheme.FONTS.bold,
        fontSize: globalTheme.SIZE.sm,
        color: globalTheme.COLORS.purple700,
        textAlign: 'center',
        marginBottom: 2,
        paddingTop: 10,
        paddingLeft:10
    },
    message: {
        fontSize: globalTheme.SIZE.sm,
        color: globalTheme.COLORS.purple700,
        textAlign: 'center',
        marginBottom: 20,
        paddingLeft:10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    buttonCancelar: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: globalTheme.COLORS.white,
        borderRadius: 5,
    },
    buttonConfirmar: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: globalTheme.COLORS.white,
        borderRadius: 5,
    },
    buttonText: {
        color: globalTheme.COLORS.purple700,
        fontFamily: globalTheme.FONTS.bold,
        fontSize: globalTheme.SIZE.sm,
    },
    separator: {
        width: 1,
        height: '60%',
        backgroundColor: globalTheme.COLORS.purple700,
        marginHorizontal: 10,
        marginTop:10
    },
});