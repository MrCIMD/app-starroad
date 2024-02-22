import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, Dimensions } from 'react-native';

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('./images/star_road_logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <ActivityIndicator size="large" color="#FFFFFF" />
        <Text style={styles.loadingText}>Cargando...</Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: '#0014DB8', // Fondo azul
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  loadingText: {
    color: '#FFFFFF',
  },
});

export default LoadingScreen;
