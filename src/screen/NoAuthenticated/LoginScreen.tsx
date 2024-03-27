import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importa AsyncStorage
import { firebaseConfig } from '../../../firebase-config';
// import { getReactNativePersistence } from '@react-native-community/async-storage'; // Importa la función getReactNativePersistence

// const persistence = getReactNativePersistence(AsyncStorage);


const app = initializeApp(firebaseConfig);

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(getAuth(app), email, password)
      .then((userCredential) => {
        console.log('Log in!');
        const user = userCredential.user;
        console.log(user.displayName);
        // Guarda el estado de autenticación en AsyncStorage
        AsyncStorage.setItem('isLoggedIn', 'true');
        navigation.navigate('MapScreen');
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <View style={styles.container}>
      {<Image source={require('../../images/star_road_logo.png')} style={styles.logo} />}
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
