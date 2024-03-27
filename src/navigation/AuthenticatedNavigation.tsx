import { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthorizationParamList, MAP_SCREEN, PROFILE_SCREEN, } from "../navigation";
import MapScreen from "../screen/Authenticated/MapScreen";
import ProfileScreen from "../screen/Authenticated/ProfileScreen";


const Stack = createStackNavigator<AuthorizationParamList>();

const AuthenticatedNavigation: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={MAP_SCREEN} component={MapScreen}/>
            <Stack.Screen name={PROFILE_SCREEN} component={ProfileScreen}/>
        </Stack.Navigator>
    )
}

export default AuthenticatedNavigation;