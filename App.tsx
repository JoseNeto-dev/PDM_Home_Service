import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import { Home } from './src/screens/home';
import { SelectUser } from './src/screens/selectUser';
import { Login } from './src/screens/login';
import { CreatePrestador } from './src/screens/createPrestador';
import { CreateCliente } from './src/screens/createCliente';
import { UpdateCliente } from './src/screens/updateCliente';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from "./src/components/Loading";
import { PerfilPrestador } from './src/screens/profilePrestador';
import { InitialPrestador } from './src/screens/initialPrestador';
import { InitialCliente } from './src/screens/initialCliente';

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
      {/* <Home/>  */}
      {/* <SelectUser/> */}
      {/* <Login/> */}
      {/* <CreatePrestador/> */}
      {/* <CreateCliente/> */}
      {/* <PerfilPrestador/> */}
      {/* <InitialPrestador/> */}
      <InitialCliente />
    </SafeAreaView>
  );
}
