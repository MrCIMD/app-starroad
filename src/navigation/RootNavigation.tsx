import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AUTHORIZATION_ROOT, NOT_AUTHORIZATION_ROOT, RootParamList } from "../navigation";
import { NavigationContainer } from '@react-navigation/native';
import AuthenticatedNavigation from "./AuthenticatedNavigation";
import NoAuthenticatedNavigation from "./NoAuthenticatedNavigation";

const Stack = createStackNavigator<RootParamList>();

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName={NOT_AUTHORIZATION_ROOT}
            >
                <Stack.Screen name={NOT_AUTHORIZATION_ROOT} component={NoAuthenticatedNavigation}/>
                <Stack.Screen name={AUTHORIZATION_ROOT} component={AuthenticatedNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigation;