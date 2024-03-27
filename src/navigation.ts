import { NavigatorScreenParams } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
/*
/*
 * Pantalla para el inicio
 * */
export const AUTH_SCREEN = 'AUTH_SCREEN';
/*
/*
 * Pantalla para el inicio de sesión
 * */
export const LOGIN_SCREEN = 'LOGIN_SCREEN';
/*
 * Pantalla para el inicio de sesión
 * */
export const REGISTER_SCREEN = 'REGISTER_SCREEN';

/*
* Clasificación de las rutas no autorizadas
* */
export type NotAuthorizationParamList = {
    [AUTH_SCREEN]: undefined;
    [LOGIN_SCREEN]: undefined;
    [REGISTER_SCREEN]: undefined;
};

/*
 * Pantalla para el mapa
 * */
export const MAP_SCREEN = 'MAP_SCREEN';
/*
/*
 * Pantalla para el mapa
 * */
export const PROFILE_SCREEN = 'PROFILE_SCREEN';

/*
* Clasificación de las rutas autorizadas
* */
export type AuthorizationParamList = {
    [MAP_SCREEN]: undefined;
    [PROFILE_SCREEN]: undefined;
};

export const AUTHORIZATION_ROOT = 'AUTHORIZATION_ROOT';
export const NOT_AUTHORIZATION_ROOT = 'NOT_AUTHORIZATION_ROOT';


export type RootParamList = {
    [NOT_AUTHORIZATION_ROOT]: NavigatorScreenParams<NotAuthorizationParamList>;
    [AUTHORIZATION_ROOT]: NavigatorScreenParams<AuthorizationParamList>;
}

export type RootStackNavigation = StackNavigationProp<RootParamList>;
