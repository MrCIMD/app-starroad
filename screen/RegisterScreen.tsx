import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [fullName, setFullName] = useState('');
    const [Username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

    const handleRegister = () => {
        // Aquí puedes agregar la lógica de validación de email y contraseña si lo deseas
        // Por ahora, simplemente navegaremos a otra pantalla cuando se presione el botón de Login
        navigation.navigate('OtraPantalla');
      };

      return (
        <View style={styles.container}>
        <Image source={require('../images/star_road_logo.png')} style={styles.logo} />
        
        <TextInput
        style={styles.input}
        placeholder="Nombre completo"
        value={fullName}
        onChangeText={setFullName}
        />
        <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={Username}
        onChangeText={setUsername}
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
        <Button title="Register" onPress={handleRegister} />
        <TouchableOpacity style={styles.facebookButton}>
        <Icon name="facebook" size={20} color="#fff" />
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