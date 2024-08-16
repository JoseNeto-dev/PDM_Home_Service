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
});