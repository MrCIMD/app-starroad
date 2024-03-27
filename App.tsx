import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/screen/NoAuthenticated/LoadingScreen';
import HomeScreen from './src/screen/NoAuthenticated/HomeScreen';
import LoginScreen from './src/screen/NoAuthenticated/LoginScreen'; // Importa tu componente de pantalla de inicio
import RegisterScreen from './src/screen/NoAuthenticated/RegisterScreen';
import mapScreen from './src/screen/Authenticated/mapScreen';
import ProfileScreen from './src/screen/Authenticated/ProfileScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';
const Stack = createStackNavigator();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const Stack = createStackNavigator();
  
  return (
   <SafeAreaProvider>
     <RootNavigation/>
   </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
