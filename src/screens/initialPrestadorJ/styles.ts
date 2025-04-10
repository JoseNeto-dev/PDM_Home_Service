import { StyleSheet } from 'react-native';
import { globalTheme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
container: {
  backgroundColor: globalTheme.COLORS.purple300,
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center'

},
titleContainer: {
  width: '100%',
  alignItems: 'center',
  marginTop: 130
},
title: {
  fontFamily: globalTheme.FONTS.bold,
  fontSize: globalTheme.SIZE.xl,
  color: globalTheme.COLORS.purple700,
  alignSelf: 'center',
  marginBottom:17
},
barra:{
  backgroundColor: globalTheme.COLORS.white, // Cor de fundo da barra
  width:"100%",
  height: 65, // Altura da barra
  borderTopWidth: 2, // Largura da borda superior
  borderTopColor: globalTheme.COLORS.purple200, // Cor da borda superior
  paddingBottom: 10, // Espaçamento interno inferior
  paddingTop: 10, // Espaçamento interno superior
  alignItems: "center",
},
iconButton:{

},
textBotton:{
  fontSize: globalTheme.SIZE.xxm, // Tamanho do texto
  color: globalTheme.COLORS.purple700, // Cor do título/tab label
}
});