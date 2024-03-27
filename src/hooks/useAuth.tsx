import {
    createUserWithEmailAndPassword,
    getReactNativePersistence,
    initializeAuth,
    signInWithEmailAndPassword,
    updateProfile,
    User
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FirebaseOptions } from "@firebase/app";
import { initializeApp } from "firebase/app";

export type CreateUserPayload = {
    email: string,
    password: string,
    firstname: string,
    lastname: string;
}

export const firebaseConfig: FirebaseOptions = {
    apiKey: "AIzaSyAVkm0wrWrKJHghSC_UGIFg3_4PMSBBqsY",
    authDomain: "starroadbase.firebaseapp.com",
    projectId: "starroadbase",
    storageBucket: "starroadbase.appspot.com",
    messagingSenderId: "362354805780",
    appId: "1:362354805780:web:ae469310fcd38eac002b01",
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

/**
 * Herramientas de la autenticación
 * */
export const useAuth = () => {


    /**
     * Crear un usuario simple en firebase auth y asigna información al perfil
     * @param {CreateUserPayload} params
     * @returns {User}
     * */
    const createUser = (params: CreateUserPayload): Promise<User> => {
        const {email, password, firstname, lastname} = params;
        return new Promise<User>(async (resolve, reject) => {
            try {
                const result = await createUserWithEmailAndPassword(auth, email, password);

                const {user} = result;

                const displayName = `${firstname.trim()} ${lastname.trim()}`

                await updateProfile(user, {displayName});

                await AsyncStorage.setItem('isLoggedIn', email);

                resolve(user);
            } catch (reason) {
                console.error(reason);
                reject(reason);
            }
        })
    }

    /**
     * Consulta que el email y password sean correcto y crea una sesión
     * @param {string} email
     * @param {string} password
     * @returns {User}
     * */
    const login = (email: string, password: string): Promise<User> => {
        return new Promise<User>(async (resolve, reject) => {
            try {
                const result = await signInWithEmailAndPassword(auth, email, password)

                const {user} = result;

                await AsyncStorage.setItem('isLoggedIn', email);

                resolve(user);
            } catch (reason) {
                console.error(reason);
                reject(reason);
            }
        })
    }

    return {
        createUser,
        login
    }
}