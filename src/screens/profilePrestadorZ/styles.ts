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
  buttonVoltar:{
    alignSelf: 'flex-start',
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
    borderColor: globalTheme.COLORS.purple700,
    borderWidth: 1
  },
  imageView: {
    width: 250,
    height: 250,
    gap: 10,
    justifyContent:'center',
    alignItems: 'center'
    
  },
  editProfile: {
    fontSize: globalTheme.SIZE.sm,
    color: globalTheme.COLORS.purple700,
    fontFamily: globalTheme.FONTS.bold,
    textDecorationLine: 'underline'
  }
})