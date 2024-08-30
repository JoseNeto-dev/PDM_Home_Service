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
    marginBottom: 25
  },
  buttonVoltar:{
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
  text: {
    color: globalTheme.COLORS.purple700,
    fontSize: globalTheme.SIZE.sm,
    marginBottom: 25,
    fontFamily: globalTheme.FONTS.regular
},
  logo: {
    width: 140,
    height: 140,  
  },
  input:{
    height:56,
    width: 350,
    backgroundColor: globalTheme.COLORS.white,
    fontSize: globalTheme.SIZE.sm,
    marginBottom: 10,
    paddingLeft: 28,
    borderRadius:15,
    borderWidth: 0.5,
    borderColor: globalTheme.COLORS.purple400
  }
});
