import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SingIn from "../pages/SingIn";
import SingUp from "../pages/SingUp";

const Stack = createNativeStackNavigator();


export default function NavStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SingIn" component={SingIn} options={{headerShown: false,}}/>
            <Stack.Screen name="cadastro" component={SingUp} options={{headerShown: false,}}/>
        </Stack.Navigator>
    )
}
