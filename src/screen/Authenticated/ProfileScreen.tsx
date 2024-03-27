import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AuthenticatedWithBottomTapsParamList, PROFILE_SCREEN } from '../../navigation';
import { RouteProp } from '@react-navigation/native';
type ProfileScreenRouteProp = RouteProp<AuthenticatedWithBottomTapsParamList, typeof PROFILE_SCREEN>;

type ProfileScreenProps = {
 route: ProfileScreenRouteProp;
};


const ProfileScreen: FC<ProfileScreenProps> = ({route}) => {
  const {
    username,
    email
  }  = route.params;
  return (
      <View style={styles.container}>
        <Text style={styles.label}>Nombre de usuario:</Text>
        <Text style={styles.text}>{username}</Text>
  
        <Text style={styles.label}>Correo electrónico:</Text>
        <Text style={styles.text}>{email}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    text: {
      fontSize: 16,
      marginBottom: 20,
    },
  });
  
  export default ProfileScreen;