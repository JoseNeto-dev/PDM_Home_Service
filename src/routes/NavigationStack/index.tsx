import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { Home } from "../../screens/homeZ";
import { SelectUser } from "../../screens/selectUserJ";
import { CreatePrestador } from "../../screens/createPrestadorZ";
import { CreateCliente } from "../../screens/createClienteZ";
import { Login } from "../../screens/loginZ";
import { ListAnuncios } from "../../screens/listAllAnunciosJ";

const { Navigator, Screen } = createNativeStackNavigator()

export function NavigationStack() {
    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Login" component={Login} />
            <Screen name="SelectUser" component={SelectUser} />
            <Screen name="CreatePrestador" component={CreatePrestador} />
            <Screen name="CreateCliente" component={CreateCliente} />
            <Screen name="ListAnuncios" component={ListAnuncios} />
        </Navigator>
    )
}