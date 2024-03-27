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
import firebase from "firebase/compat";
import UserInfo = firebase.UserInfo;

export type Session = Omit<UserInfo, 'photoURL' | 'phoneNumber'>

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
     * Crea la session del usuario
     * @param {User} user
     * */
    const createSession = async (user: User) => {
        const {email, displayName, uid, providerId} = user

        const session: Session = {
            email,
            displayName,
            uid,
            providerId
        }

        const strSession = JSON.stringify(session);

        await AsyncStorage.setItem('session', strSession);

        return true;
    }

    const getSession = (): Promise<Session | null> => {
        return new Promise<Session | null>(async (resolve, reject) => {
            const strSession = await AsyncStorage.getItem('session');

            if (strSession) {
                const session: Session = JSON.parse(strSession);

                resolve(session);
            }

            resolve(null);
        })
    }


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

                await createSession(user);

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

                await createSession(user);

                resolve(user);
            } catch (reason) {
                console.error(reason);
                reject(reason);
            }
        })
    }

    return {
        getSession,
        createUser,
        login,
    }
}