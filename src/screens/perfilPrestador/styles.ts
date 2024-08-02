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
})