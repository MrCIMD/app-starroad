import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoadingScreen from './LoadingScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular un proceso de carga
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
  }, []);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Text>¡La aplicación ha cargado exitosamente!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
