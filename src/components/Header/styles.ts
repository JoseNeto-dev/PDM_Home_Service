import { StyleSheet } from 'react-native';
import { globalTheme } from '../../global/styles/themes';
import { color } from '@rneui/themed/dist/config';


export const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 25, //apagar aqui depois - resolver safeArea
        left: 0,
        right: 0,
        height: 83,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 5,
        borderBottomWidth: 1,         // Define a espessura da borda inferior
        borderBottomColor: globalTheme.COLORS.purple700,    // Define a cor da borda inferior
        borderTopWidth: 0,            // Define a largura das outras bordas como 0
        borderTopColor: 'transparent',
        borderLeftWidth: 0,
        borderLeftColor: 'transparent',
        borderRightWidth: 0,
        borderRightColor: 'transparent',
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25
    },
    
    title: {
        fontFamily: globalTheme.FONTS.bold,
        fontSize: globalTheme.SIZE.xl,
        color: globalTheme.COLORS.purple700
    },

    imageProfile: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: globalTheme.COLORS.purple700
    }

});