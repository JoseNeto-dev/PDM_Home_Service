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
  buttonVoltar: {
    position: 'absolute', // Remove o botão do fluxo normal
    top: "7%", // Ajuste este valor para posicionar o botão mais alto ou mais baixo na tela
    left: 15, // Ajuste este valor para posicionar o botão mais à esquerda
    zIndex: 1, // Garante que o botão fique sobre outros elementos, se necessário
},
  logo: {
    width: 140,
    height: 140,  
  },
  alignInput: {
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center', // Alinhar itens no centro verticalmente
    width: 350,
    marginBottom: 25
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
    borderColor: globalTheme.COLORS.purple400,
    fontFamily: globalTheme.FONTS.regular
  },  
  inputSecurity:{
    height:56,
    width: "85%",
    fontSize:20,
    marginBottom: 10,
    paddingLeft: 28,
  },
  eyeSecurity: {
    width: "15%",
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center',
  },
  security: {
    flexDirection: 'row',
    width: "100%",
    height: 56,
    backgroundColor: globalTheme.COLORS.white,
    borderRadius:15,
    borderWidth: 0.5,
    borderColor: globalTheme.COLORS.purple400,
  }
});
