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
  align: {
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center', // Alinhar itens no centro verticalmente

  },
  title: {
    color: '#564caf',
    fontSize: 36,
    marginTop: 20,
    marginBottom: 30
  },
  logo: {
    width: 140,
    height: 140,  
  },
});
