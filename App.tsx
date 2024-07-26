import React from 'react';
import { View, StatusBar } from 'react-native';
import { Home } from './src/screens/home';
import { SelectUser } from './src/screens/selectUser';
import { Login } from './src/screens/login';
import { CreatePrestador } from './src/screens/createPrestador';
import { CreateCliente } from './src/screens/createCliente';
import { UpdateCliente } from './src/screens/updateCliente';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {/* <Home/>  */}
      {/* <SelectUser/> */}
      <Login/>
      {/* <CreatePrestador/> */}
      {/* <CreateCliente/> */}
      {/* <UpdateCliente/> */}
    </View>
  );
}
