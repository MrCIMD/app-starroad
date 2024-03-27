import {NavigatorScreenParams,RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
/*
 * Pantalla para el inicio
 * */
export const LOADING_SCREEN = 'HOME_SCREEN';
/*
/*
 * Pantalla para el inicio
 * */
export const HOME_SCREEN = 'HOME_SCREEN';
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
 * Pantalla para recuperar su cuenta
 * */
export const SCREEN_FORGOT = 'SCREEN_FORGOT';
/*
 * Pantalla para recuperar su cuenta
 * */
export const SCREEN_RESTORE_PASSWORD = 'SCREEN_RESTORE_PASSWORD';
/*
 * Pantallas de las rutas, de un usuario no autenticado
 * */
export type NoAuthenticatedParamList = {
  [LOADING_SCREEN]: undefined;  
  [HOME_SCREEN]: undefined;
  [LOGIN_SCREEN]: undefined;
  [REGISTER_SCREEN]: undefined;
  [SCREEN_FORGOT]: {
    email: string;
  };
  [SCREEN_RESTORE_PASSWORD]: {
    token: string;
  };
};
/*
 * Es el tipo de dato de los props recibidas para el funcionamiento de la vista
 * */
export type ScreenRestorePasswordProps = RouteProp<
  NoAuthenticatedParamList,
  typeof SCREEN_RESTORE_PASSWORD
>;
export type ScreenForgotPasswordProps = RouteProp<
  NoAuthenticatedParamList,
  typeof SCREEN_FORGOT
>;
/*
 * Pantalla para el mapa
 * */
export const MAP_SCREEN = 'MAP_SCREEN';
/*
/*
 * Pantalla para el mapa
 * */
export const PROFILE_SCREEN = 'PROFILE_SCREEN';


export type AuthenticatedWithBottomTapsParamList = {
  [MAP_SCREEN]: undefined;
  [PROFILE_SCREEN]: {
    username: string;
    email: string;
  }
};
export const ROUTES_AUTHENTICATED_WITH_BOTTOMTAPS = 'ROUTES_AUTHENTICATED_WITH_BOTTOMTAPS';


export type AuthenticatedParamList = {
    [ROUTES_AUTHENTICATED_WITH_BOTTOMTAPS]: NavigatorScreenParams<AuthenticatedWithBottomTapsParamList>,
//   Por si se llega a tener maás pantallas pero sintbas
}
export type ScreenProfileProps = RouteProp<
AuthenticatedWithBottomTapsParamList,
  typeof PROFILE_SCREEN
>;

/*
 * Es el tipo de dato de los props recibidas para el funcionamiento de la vista
 * */
// export type ScreenDetailsServiceProps = RouteProp<
// AuthenticatedParamList,
//   typeof SCREEN_DETAILS_SERVICE
// >;

/*
 * Es el tipo de dato de los props recibidas para el funcionamiento de la vista
 * */
// export type ScreenDetailsInvoiceProps = RouteProp<
// AuthenticatedParamList,
// typeof SCREEN_DETAILS_INVOICE
// >;
/*
 * Pull de rutas de un usuario autenticado
 * */
export const AUTHENTICATED_SCREEN = 'AUTHENTICATED_SCREEN';
/*
 * Pull de rutas de un usuario autenticado
 * */
export const NO_AUTHENTICATED_SCREEN = 'NO_AUTHENTICATED_SCREEN';

export type RootParamList = {
  [AUTHENTICATED_SCREEN]: NavigatorScreenParams<AuthenticatedParamList>;
   [NO_AUTHENTICATED_SCREEN]: NavigatorScreenParams<NoAuthenticatedParamList>;
}

export type RootProps = StackNavigationProp<RootParamList>;
