import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicRoutes } from "./NavigationStack/publicRoutes";
import { PrivateRoutesPrestador } from "./NavigationStack/privateRoutesPrestador";
import { PrivateRoutesCliente } from "./NavigationStack/privateRoutesCliente";
import { AuthContext } from "../contextS/Auth";



export function Routes(){

  const authData = useContext(AuthContext);

  const autenticado = authData.authData?.token;
  console.log(`O token é: ${autenticado}` );
  
  
 
  
  const papel = authData.authData?.papel
  console.log(`O papel é: ${papel}` );
 
  


    return (
      <NavigationContainer>
       { !autenticado ? <PublicRoutes/> : papel === 1 ? <PrivateRoutesPrestador/> : <PrivateRoutesCliente/>}
      </NavigationContainer>
    )
  }