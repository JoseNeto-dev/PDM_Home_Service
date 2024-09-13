import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ListAnuncios } from "../../screens/listAllAnunciosJ";
import { CategoriaEscolhida } from "../../screens/categoryAnunciosJ";
import { ProfileCliente } from "../../screens/profileClienteD"
import { UpdateCliente } from "../../screens/updateProfileClienteD"
import { InitialCliente } from "../../screens/initialClienteD"
import { ListPrestadores } from "../../screens/listAllPrestadorJ";

const { Navigator, Screen } = createNativeStackNavigator()

export function PrivateRoutesCliente() {
    return(
        <Navigator initialRouteName="CategoriaEscolhida" screenOptions={{headerShown: false}}>
            <Screen name="InitialCliente" component={InitialCliente} />
            <Screen name="ListAnuncios" component={ListAnuncios} />
            <Screen name="ListPrestadores" component={ListPrestadores} />
            <Screen name="CategoriaEscolhida" component={CategoriaEscolhida} />
            <Screen name="ProfileCliente" component={ProfileCliente} />
            <Screen name="UpdateCliente" component= {UpdateCliente} />
        </Navigator>
    )
}