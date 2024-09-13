import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { InitialPrestador } from "../../screens/initialPrestadorJ";
import { CreateAnuncio } from "../../screens/createAnuncioD"
import { UpdateAnuncio } from "../../screens/updateAnuncioD"
import { UpdateProfilePrestador } from "../../screens/updateProfilePrestadorZ";
import { ProfilePrestador } from "../../screens/profilePrestadorZ";
import { Home } from "../../screens/homeZ";

const { Navigator, Screen } = createNativeStackNavigator()

export function PrivateRoutesPrestador() {
    return(
        <Navigator initialRouteName="InitialPrestador" screenOptions={{headerShown: false}}>
            <Screen name="InitialPrestador" component={InitialPrestador} />
            <Screen name="ProfilePrestador" component={ProfilePrestador} />
            <Screen name="UpdateProfilePrestador" component={UpdateProfilePrestador} />
            <Screen name="CreateAnuncio" component= {CreateAnuncio} />
            <Screen name="UpdateAnuncio" component= {UpdateAnuncio} />
            
        </Navigator>
    )
}