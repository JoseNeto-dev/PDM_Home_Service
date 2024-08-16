import { StyleSheet } from 'react-native';
import { globalTheme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingTop: 30,
    backgroundColor: globalTheme.COLORS.purple300,
    width: '100%',
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center', // Alinhar itens no centro verticalmente
    gap:2
    
  },
  buttonVoltar:{
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
    padding: 15,
    fontSize: globalTheme.SIZE.xm,
    flexWrap: 'wrap', // Permite que o texto quebre a linha
    alignSelf: 'center', // Garante que a View seja centralizada na tela
    
  },
  title: {
    fontFamily: globalTheme.FONTS.bold,
    fontSize: globalTheme.SIZE.xl,
    color: globalTheme.COLORS.purple700,
    alignSelf: 'center',
    marginBottom: 2
  },
  subtitle: {
    fontFamily: globalTheme.FONTS.regular,
    fontSize: globalTheme.SIZE.xm,
    color: globalTheme.COLORS.purple700,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: 2,
    maxWidth: '100%', // Impede o subtítulo de ultrapassar a largura do contêiner
  }
});