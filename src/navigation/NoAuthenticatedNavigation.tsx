import { createStackNavigator } from "@react-navigation/stack";
import { FC } from "react";
import { AUTH_SCREEN, LOGIN_SCREEN, NotAuthorizationParamList, REGISTER_SCREEN } from "../navigation";
import HomeScreen from "../screen/NoAuthenticated/HomeScreen";
import LoginScreen from "../screen/NoAuthenticated/LoginScreen";
import RegisterScreen from "../screen/NoAuthenticated/RegisterScreen";

const Stack = createStackNavigator<NotAuthorizationParamList>();

const NoAuthenticatedNavigation: FC = () => {
    return (
        <Stack.Navigator initialRouteName={AUTH_SCREEN}>
            <Stack.Screen name={AUTH_SCREEN} component={HomeScreen}/>
            <Stack.Screen name={LOGIN_SCREEN} component={LoginScreen}/>
            <Stack.Screen name={REGISTER_SCREEN} component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

export default NoAuthenticatedNavigation;