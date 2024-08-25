import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Home } from "../../screens/homeZ";
import { SelectUser } from "../../screens/selectUserJ";
import { CreatePrestador } from "../../screens/createPrestadorZ";
import { CreateCliente } from "../../screens/createClienteZ";
import { Login } from "../../screens/loginZ";
import { ListAnuncios } from "../../screens/listAllAnunciosJ";
import { CategoriaEscolhida } from "../../screens/categoryAnunciosJ";
import { InitialPrestador } from "../../screens/initialPrestadorJ";
import { ProfileCliente } from "../../screens/profileClienteD"
import { UpdateCliente } from "../../screens/updateProfileClienteD"
import { CreateAnuncio } from "../../screens/createAnuncioD"
import { UpdateAnuncio } from "../../screens/updateAnuncioD"

const { Navigator, Screen } = createNativeStackNavigator()

export function NavigationStack() {
    return(
        <Navigator initialRouteName="InitialPrestador" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Login" component={Login} />
            <Screen name="SelectUser" component={SelectUser} />
            <Screen name="CreatePrestador" component={CreatePrestador} />
            <Screen name="CreateCliente" component={CreateCliente} />
            <Screen name="ListAnuncios" component={ListAnuncios} />
            <Screen name="CategoriaEscolhida" component={CategoriaEscolhida} />
            <Screen name="InitialPrestador" component={InitialPrestador} />
            <Screen name="ProfileCliente" component={ProfileCliente} />
            <Screen name="UpdateCliente" component= {UpdateCliente} />
            <Screen name="CreateAnuncio" component= {CreateAnuncio} />
            <Screen name="UpdateAnuncio" component= {UpdateAnuncio} />
        </Navigator>
    )
}