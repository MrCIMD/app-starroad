import { createStackNavigator } from "@react-navigation/stack";
import { FC } from "react";
import { AuthenticatedParamList,ROUTES_AUTHENTICATED_WITH_BOTTOMTAPS } from "../navigation";
import TabsNavigation from "./TabsNavigation";



const Stack = createStackNavigator<AuthenticatedParamList>();

const AuthenticatedNavigation: FC = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name={ROUTES_AUTHENTICATED_WITH_BOTTOMTAPS} component={TabsNavigation}/>
        </Stack.Navigator>
    )
}

export default AuthenticatedNavigation;