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
  buttonContainerType1: {
    marginTop: 25,
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
  alignInput: {
    alignItems: 'center', // Alinhar itens no centro horizontalmente
    justifyContent: 'center', // Alinhar itens no centro verticalmente
    width: 350
  },
  input:{
    height:56,
    width: 350,
    backgroundColor:'#fff',
    fontSize:20,
    marginBottom: 10,
    paddingLeft: 28,
    borderRadius:15,
    borderWidth: 0.5,
    borderColor: "#9089CB"
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
    backgroundColor: "#fff",
    borderRadius:15,
    borderWidth: 0.5,
    borderColor: "#9089CB",
  }
});
