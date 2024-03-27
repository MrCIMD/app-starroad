import React, { FC, useEffect, useState } from 'react';
import { Button, Platform, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Session, useAuth } from "../../hooks";


const ProfileScreen: FC = () => {
    const [session, setSession] = useState<Session | null>(null)

    const {getSession} = useAuth();

    /*
    * TODO - Gestión de usuario
    * */
    useEffect(() => {
        let fetch = true;

        if (fetch) {
            (async () => {
                const session = await getSession();

                setSession(session);
                console.log(session)
            })()
        }

        return () => {
            fetch = false;
        }
    }, [])
    const handleSave = async () => {
        const data = await AsyncStorage.getItem('isLoggedIn');

        console.log(data)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nombre de usuario:</Text>
            <Text style={styles.text}>{session?.displayName}</Text>

            <Text style={styles.label}>Correo electrónico:</Text>
            <Text style={styles.text}>{session?.email}</Text>

            <Button
                title="Login"
                onPress={handleSave}
                color={Platform.OS === "ios" ? "#FFFFFF" : "#0066FF"}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
    },
});

export default ProfileScreen;