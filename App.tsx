import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';
import { AuthProvider } from './src/contextS/Auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Configuração da StatusBar */}
      <StatusBar 
        barStyle="light-content" // Altera a cor dos ícones para claro
        translucent={false} // Se falso, a StatusBar não será transparente
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </SafeAreaView>
  );
}
