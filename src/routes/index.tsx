import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./NavigationStack/publicRoutes";
import { PrivateRoutesPrestador } from "./NavigationStack/privateRoutesPrestador";
import { PrivateRoutesCliente } from "./NavigationStack/privateRoutesCliente";



export function Routes(){
  const autenticado = false; //utilizar useContext
  const cnpj = true; //utilizar useContext
    return (
      <NavigationContainer>
       { autenticado ? <PublicRoutes/> : cnpj ? <PrivateRoutesPrestador/> : <PrivateRoutesCliente/>}
      </NavigationContainer>
    )
  }