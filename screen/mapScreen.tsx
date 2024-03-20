// MapScreen.tsx
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import PlaceInfoCard from '../components/PlaceInfoCard';
import useLocation from '../context/useLocation';

export interface Place {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  image_url?: string;
  location?: string;
  display_phone?: string;
}

const MapScreen = () => {
  const currentLocation = useLocation();
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showPlaceInfo, setShowPlaceInfo] = useState(false);

  const handleSearch = (query: string) => {
    // Lógica para buscar lugares
  };

  const handleSelectPrediction = (prediction: Place) => {
    setSelectedPlace(prediction);
    setShowPlaceInfo(true);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} onSelectPrediction={handleSelectPrediction} />
      {currentLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={currentLocation} title="You are here" />
          {selectedPlace && (
            <Marker
              coordinate={{
                latitude: selectedPlace.latitude,
                longitude: selectedPlace.longitude,
              }}
              title={selectedPlace.name}
              pinColor="red"
              onPress={() => setShowPlaceInfo(true)}
            />
          )}
        </MapView>
      )}
      <NavBar />
      {showPlaceInfo && selectedPlace && <PlaceInfoCard place={selectedPlace} />}
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
