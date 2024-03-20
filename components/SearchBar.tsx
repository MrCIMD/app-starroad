// components/SearchBar.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Platform, FlatList, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { YELP_API_KEY } from '../apikeys';
import { Place } from '../screen/mapScreen';
import * as Location from 'expo-location';
import PlaceInfoCard from '../components/PlaceInfoCard'; // Importa el componente de tarjeta
import useLocation from '../context/useLocation';

interface SearchBarProps {
  onSearch: (term: string, latitude: number, longitude: number) => void;
  onSelectPrediction: (prediction: Place) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onSelectPrediction }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [predictions, setPredictions] = useState<Place[]>([]);
  const currentLocationData = useLocation();

  const handleSearch = () => {
    if (!currentLocationData) {
      console.error('Current location is not available.');
      return;
    }

    const { latitude, longitude } = currentLocationData;
    onSearch(searchTerm, latitude, longitude);
  };

  const handleAutocomplete = async (term: string) => {
    setSearchTerm(term);
    
    if (term.trim().length === 0) {
      setPredictions([]);
      return;
    }
  
    try {
      if (!currentLocationData) {
        console.error('Current location is not available.');
        return;
      }
  
      const { latitude, longitude } = currentLocationData;
  
      // Agregar un retraso de 500 milisegundos antes de hacer la solicitud
      setTimeout(async () => {
        try {
          const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
            params: {
              term,
              latitude,
              longitude,
              radius: 1000, // Definir el radio de búsqueda en metros (en este ejemplo, 1 km)
            },
            headers: {
              Authorization: `Bearer ${YELP_API_KEY}`,
            },
          });
  
          const places: Place[] = response.data.businesses.map((business: any) => ({
            id: business.id,
            name: business.name,
            latitude: business.coordinates.latitude,
            longitude: business.coordinates.longitude,
            image_url: business.image_url,
            location: business.location.display_address.join(', '),
            display_phone: business.display_phone,
          }));
  
          setPredictions(places);
        } catch (error: any) {
          if (axios.isAxiosError(error)) {
            console.error('Error fetching predictions:', error.response?.data || error.message);
          } else {
            console.error('Error fetching predictions:', error);
          }
        }
      }, 500);
    } catch (error: any) {
      console.error('Error:', error);
    }
  };
  
  const handlePredictionPress = (prediction: Place) => {
    setSearchTerm(prediction.name);
    setPredictions([]);
    onSelectPrediction(prediction);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter search keyword"
        value={searchTerm}
        onChangeText={handleAutocomplete}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={predictions}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePredictionPress(item)}>
            <Text style={styles.prediction}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        style={styles.predictionsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    backgroundColor: '#e0e0e0',
    alignItems: 'stretch',
    marginTop: Platform.OS === 'ios' ? 44 : 0,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  prediction: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  predictionsList: {
    maxHeight: 200,
  },
});

export default SearchBar;
