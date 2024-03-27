import React, { FC, useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { useAuth, useNav } from "../../hooks";

const LoginScreen: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {login} = useAuth()
    const {handleGoMap} = useNav();

    const handleLogin = async () => {
        const session = await login(email, password);

        if (session) handleGoMap();
    };

    return (
        <View style={styles.container}>
            {<Image source={require('../../images/star_road_logo.png')} style={styles.logo}/>}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry
            />
            <Button title="Login" onPress={handleLogin}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
});

export default LoginScreen;
