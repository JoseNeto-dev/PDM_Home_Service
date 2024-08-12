import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { Home } from './src/screens/homeZ';
import { SelectUser } from './src/screens/selectUserJ';
import { Login } from './src/screens/loginZ';
import { CreatePrestador } from './src/screens/createPrestadorZ';
import { CreateCliente } from './src/screens/createClienteZ';
import { UpdateCliente } from './src/screens/updateProfileClienteD';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from "./src/components/Loading";
import { PerfilPrestador } from './src/screens/profilePrestadorZ';
import { InitialPrestador } from './src/screens/initialPrestadorJ';
import { ListAnuncios } from './src/screens/listAllAnunciosJ';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'; // ou FontAwesome, MaterialIcons, etc.
import { globalTheme } from './src/global/styles/themes';


const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle='default'
        backgroundColor='black'
      />
      {/* Danrlei */}

      {/* Zé Neto */}
      {/* <Home/>  */}
      {/* <CreatePrestador/> */}
      {/* <CreateCliente/> */}
      {/* <PerfilPrestador/> */}
      {/* <Login/> */}

      {/* Joyce */}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Criar Anúncio"
            component={InitialPrestador}
            options={{
              tabBarStyle: {
                backgroundColor: globalTheme.COLORS.white, // Cor de fundo da barra
                height: 65, // Altura da barra
                borderTopWidth: 2, // Largura da borda superior
                borderTopColor: globalTheme.COLORS.purple200, // Cor da borda superior
                paddingBottom: 10, // Espaçamento interno inferior
                paddingTop: 10, // Espaçamento interno superior
              },
        
              tabBarLabelStyle: {
                fontSize: globalTheme.SIZE.xxm, // Tamanho do texto
                color: globalTheme.COLORS.purple700, // Cor do título/tab label
              },
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="add-circle-outline" color={globalTheme.COLORS.purple700} size={30} />
              ),
               
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      {/* <ListAnuncios /> */}
      {/* <SelectUser/> */}

    </SafeAreaView>
  );
}
