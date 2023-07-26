// FilmHelpers.ts

import { Alert } from 'react-native';

export const handleFilmItemClick = (filmTitre: string, anneeTitre: string) => {
  Alert.alert('Film sélectionné', `Vous avez sélectionné le film : ${filmTitre} sortie en : ${anneeTitre}`);
  
};
