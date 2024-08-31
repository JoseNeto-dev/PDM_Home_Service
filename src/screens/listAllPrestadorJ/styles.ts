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
  buttonVoltar: {
    position: 'absolute', // Remove o botão do fluxo normal
    top: "5%", // Ajuste este valor para posicionar o botão mais alto ou mais baixo na tela
    left: 15, // Ajuste este valor para posicionar o botão mais à esquerda
    zIndex: 1, // Garante que o botão fique sobre outros elementos, se necessário
},
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent:'center',
    paddingTop: 50,
    paddingBottom: 10,
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
    maxWidth: '90%', // Impede o subtítulo de ultrapassar a largura do contêiner
  }
});