// styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 70,
    backgroundColor: '#eae1fd',
    height: '100%',
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center', // Alinhar itens no centro verticalmente
  },  
  containerGroup: {
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center', // Alinhar itens no centro verticalmente

  },
  title: {
    color: '#564caf',
    fontSize: 36,
    marginTop: 20,
    marginBottom: 40

  },
  logo: {
    width: 140,
    height: 140,  
  },
  buttonContainerType1: {
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#564CAF',
    margin: 10,
    width: 300,
    height: 60,
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center', // Alinhar itens no centro verticalmente
  },
  buttonTitleType1: {
    fontSize: 20,
    color: 'white'
  },
  buttonContainerType2: {
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#ffff',
    margin: 10,
    width: 300,
    height: 60,
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center', // Alinhar itens no centro verticalmente
    borderColor: '#564CAF',
    borderWidth: 0.5
  },
  buttonTitleType2: {
    fontSize: 20,
    color: '#564CAF',
    fontWeight: 'bold'
  }
});
