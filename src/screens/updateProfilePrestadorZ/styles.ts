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
    flex: 1,
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center', // Alinhar itens no centro verticalmente
    marginBottom: 25
  },
  text: {
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    color: globalTheme.COLORS.purple700,
    fontSize: globalTheme.SIZE.sm,
    marginBottom: 25,
    fontFamily: globalTheme.FONTS.regular
  },
  logo: {
    width: 140,
    height: 140,
  },
  buttonVoltar: {
    position: 'absolute', // Remove o botão do fluxo normal
    top: "5%", // Ajuste este valor para posicionar o botão mais alto ou mais baixo na tela
    left: 15, // Ajuste este valor para posicionar o botão mais à esquerda
    zIndex: 1, // Garante que o botão fique sobre outros elementos, se necessário
},
  mapContainer: {
    borderRadius: 20,
    borderColor: globalTheme.COLORS.purple700,
    borderWidth: 1,
    overflow: 'hidden',
    width: 350,
    height: 200,  // Defina a altura que você deseja para o mapa
  },
  map: {
    flex: 1,  // Permite que o MapView ocupe todo o espaço disponível no contêiner
  },
  input: {
    height: 56,
    width: 350,
    backgroundColor: globalTheme.COLORS.white,
    fontSize: globalTheme.SIZE.sm,
    marginBottom: 10,
    paddingLeft: 28,
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: globalTheme.COLORS.purple400
  }
});
