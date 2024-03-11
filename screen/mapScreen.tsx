import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import useLocation from '../context/useLocation';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearcrBar';

const MapScreen = () => {
  const currentLocation = useLocation();

  const handleSearch = (query: string) => {
    // Lógica para buscar lugares
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      {currentLocation && (
        <MapView style={styles.map} initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
          <Marker coordinate={currentLocation} title="You are here" />
        </MapView>
      )}
      <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
