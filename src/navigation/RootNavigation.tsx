import { createStackNavigator } from "@react-navigation/stack";
import { AUTHENTICATED_SCREEN, NO_AUTHENTICATED_SCREEN, RootParamList } from "../navigation";
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatedNavigation from "./AuthenticatedNavigation";
import NoAuthenticatedNavigation from "./NoAuthenticatedNavigation";

const Stack = createStackNavigator<RootParamList>();

const RootNavigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name={AUTHENTICATED_SCREEN} component={AuthenticatedNavigation}/>
                <Stack.Screen name={NO_AUTHENTICATED_SCREEN} component={NoAuthenticatedNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;