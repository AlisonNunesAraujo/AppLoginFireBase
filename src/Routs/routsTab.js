import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";
import Profile from "../pages/Profile";

const Tab = createBottomTabNavigator();

export default function Tabs(){
    return(
        <Tab.Navigator
            screenOptions={{headerShown: false,
            
            }}
           
        >
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
    )
}