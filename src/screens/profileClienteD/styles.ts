import { StyleSheet } from 'react-native';
import { globalTheme } from '../../global/styles/themes';
export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 10,
    backgroundColor: globalTheme.COLORS.purple300,
    height: '100%',
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center', // Alinhar itens no centro verticalmente
    gap: 30
  },
  imagePerfil: {

  },
  informations: {
    width: '95%',
  },
  buttons: {
    flexDirection: 'row',
    gap: 20
  },
  buttonVoltar: {
    position: 'absolute', // Remove o botão do fluxo normal
    top: "5%", // Ajuste este valor para posicionar o botão mais alto ou mais baixo na tela
    left: 15, // Ajuste este valor para posicionar o botão mais à esquerda
    zIndex: 1, // Garante que o botão fique sobre outros elementos, se necessário
},
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: globalTheme.COLORS.purple350,
    paddingVertical: 15,
    flexDirection: 'row',
  },
  textInformation: {
    flex: 1,
    fontSize: globalTheme.SIZE.sm,
    color: globalTheme.COLORS.purple700,
    fontFamily: globalTheme.FONTS.regular

  },
  textBold: {
    fontSize: globalTheme.SIZE.sm,
    color: globalTheme.COLORS.purple700,
    fontFamily: globalTheme.FONTS.bold
  },
  profile: {
    height: 200,
    width: 200,
    borderRadius: 1000,
    backgroundColor: globalTheme.COLORS.purple300
  },
  imageView: {
    width: 250,
    height: 250,
    gap: 10,
    justifyContent:'center',
    alignItems: 'center'
    
  },
  editProfile: {
    fontSize: globalTheme.SIZE.xm,
    color: globalTheme.COLORS.purple700,
    fontFamily: globalTheme.FONTS.bold,
    textDecorationLine: 'underline'
  }
})