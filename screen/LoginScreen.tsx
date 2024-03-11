import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';



const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = () => {
    // Credenciales predefinidas
    /*const correctEmail = 'admin@starroad.com';
    const correctPassword = 'starroad';*/
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
      console.log('Log in!')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('MapScreen');
    })
    .catch(error => {
      console.log(error)
    })

    // Validar credenciales
   /* if (email === correctEmail && password === correctPassword) {
      // Credenciales correctas, navegar a la pantalla de mapa
      navigation.navigate('MapScreen');
    } else {
      // Credenciales incorrectas, mostrar mensaje de error
      setError('Correo electrónico o contraseña incorrectos');
    }*/
  };

  return (
    <View style={styles.container}>
      <Image source={require('../images/star_road_logo.png')} style={styles.logo} />
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
      <Button title="Login" onPress={handleLogin} />
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
