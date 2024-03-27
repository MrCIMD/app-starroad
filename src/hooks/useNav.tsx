import { useNavigation } from "@react-navigation/native";
import {
    AUTHORIZATION_ROOT,
    LOGIN_SCREEN,
    MAP_SCREEN,
    NOT_AUTHORIZATION_ROOT,
    REGISTER_SCREEN,
    RootStackNavigation
} from "../navigation";

export const useNav = () => {
    const {navigate} = useNavigation<RootStackNavigation>();

    /*
    * Navegar al login
    * */
    const handleGoLogin = () => {
        navigate(NOT_AUTHORIZATION_ROOT, {
            screen: LOGIN_SCREEN
        })
    }

    /*
    * Navegar al registro
    * */
    const handleGoRegister = () => {
        navigate(NOT_AUTHORIZATION_ROOT, {
            screen: REGISTER_SCREEN
        })
    }

    /*
    * Navegar al Map
    * */
    const handleGoMap = () => {
        navigate(AUTHORIZATION_ROOT, {
            screen: MAP_SCREEN
        })
    }

    return {
        handleGoLogin,
        handleGoRegister,
        handleGoMap
    }
}