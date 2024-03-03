import { StackNavigationProp } from '@react-navigation/stack';

// Definición del tipo de la navegación
export type RootStackParamList = {
  Home: undefined;
  Login: {};
  Register: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
