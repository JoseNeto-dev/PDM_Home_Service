import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationStack } from "./NavigationStack";



export function Routes(){
  
    return (
      <NavigationContainer>
        <NavigationStack/>
      </NavigationContainer>
    )
  }