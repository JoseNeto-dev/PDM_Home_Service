// styles.ts
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
  align: {
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center', // Alinhar itens no centro verticalmente

  },
  title: {
    color: globalTheme.COLORS.purple700,
    fontSize: globalTheme.SIZE.xl,
    marginTop: 20,
    marginBottom: 30,
    fontFamily: globalTheme.FONTS.bold
  },
  logo: {
    width: 140,
    height: 140,  
  },
});
