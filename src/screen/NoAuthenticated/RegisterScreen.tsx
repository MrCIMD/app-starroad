import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CreateUserPayload, useAuth } from "../../hooks";

const RegisterScreen: React.FC<{ navigation: any }> = ({navigation}) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const {createUser} = useAuth()

    /**
     * Guarda el nuevo usuario y crea una sesión para acceder a la app
     * */
    const handleRegister = async () => {
        const payload: CreateUserPayload = {
            email, password, firstname, lastname
        }

        const session = await createUser(payload);

        if (session) {
            navigation.navigate('MapScreen');
        }
    };

    return (
        <View style={styles.container}>
            {<Image source={require('../../images/star_road_logo.png')} style={styles.logo}/>}
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={firstname}
                onChangeText={setFirstname}
            />
            <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={lastname}
                onChangeText={setLastName}
            />
            <TextInput
                style={styles.input}
                placeholder="Correo electrónico"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <Button title="Register" onPress={handleRegister}/>
            <TouchableOpacity style={styles.facebookButton}>
                <Icon name="facebook" size={20} color="#fff"/>
                <Text style={styles.facebookButtonText}>Registrarse con Facebook</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 3,
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
    facebookButton: {
        backgroundColor: '#1877f2',
        padding: 10,
        borderRadius: 4,
        marginTop: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    facebookButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 8,
    },
});

export default RegisterScreen;
