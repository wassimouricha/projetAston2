import React from 'react';
import { View, Text } from 'react-native';

const CardDetailScreen = ({ route }) => {
  const { titre, annee } = route.params;

  return (
    <View>
      <Text>Film Detail Screen</Text>
      <Text>Title: {titre}</Text>
      <Text>Year: {annee}</Text>
      {/* Add more content for the film detail */}
    </View>
  );
};

export default CardDetailScreen;
