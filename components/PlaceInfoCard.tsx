// components/PlaceInfoCard.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Place } from '../screen/mapScreen';

interface PlaceInfoCardProps {
  place: Place;
}

const PlaceInfoCard: React.FC<PlaceInfoCardProps> = ({ place }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: place.image_url }} style={styles.image} />
      <Text style={styles.name}>{place.name}</Text>
      <Text style={styles.location}>{place.location}</Text>
      <Text style={styles.phone}>{place.display_phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  location: {
    marginBottom: 5,
  },
  phone: {
    color: 'blue',
  },
});

export default PlaceInfoCard;
