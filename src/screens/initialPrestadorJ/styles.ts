import { StyleSheet } from 'react-native';
import { globalTheme } from '../../global/styles/themes';
export const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: globalTheme.COLORS.purple300,
  //   height: '100%',
  //   alignItems: 'center', // Alinhar itens no centro horizontalmente
  //   justifyContent: 'center', // Alinhar itens no centro verticalmente
  // },
  // title: {
  //   fontFamily: globalTheme.FONTS.bold,
  //   fontSize: globalTheme.SIZE.xl,
  //   color: globalTheme.COLORS.purple700,
  //   backgroundColor: "red",
  //   marginBottom: 20
  // },
  


container: {
  backgroundColor: globalTheme.COLORS.purple300,
  flex: 1,
  alignItems: 'center',

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
});