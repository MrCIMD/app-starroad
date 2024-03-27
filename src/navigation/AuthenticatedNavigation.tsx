import React, { FC } from "react";
import { AuthorizationParamList, MAP_SCREEN, PROFILE_SCREEN, } from "../navigation";
import MapScreen from "../screen/Authenticated/MapScreen";
import ProfileScreen from "../screen/Authenticated/ProfileScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator<AuthorizationParamList>();

const AuthenticatedNavigation: FC = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName={MAP_SCREEN}>
            <Tab.Screen
                name={MAP_SCREEN}
                component={MapScreen}
                options={{
                    tabBarIcon: ({}) => (
                        <Icon name='location-arrow' size={30} color="#42A5F5"/>
                    )
                }}/>
            <Tab.Screen
                name={PROFILE_SCREEN}
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({}) => (
                        <Icon name='user' size={30} color="#42A5F5"/>
                    )
                }}/>
        </Tab.Navigator>
    )
}

export default AuthenticatedNavigation;