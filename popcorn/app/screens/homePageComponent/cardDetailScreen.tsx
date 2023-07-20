import React from 'react';
import { View, Text, ViewStyle, Image, ImageSourcePropType } from 'react-native';


const CardDetailScreen = ({ route }) => {
  const { titre, annee , affiche} = route.params;

  return (
    
    <View style={$screenContentContainer}>
      <Image source={affiche} style={{ width: 100, height: 100 }} />
      <Text>Film Detail Screen</Text>
      <Text>Title: {titre}</Text>
      <Text>Year: {annee}</Text>
      {/* Add more content for the film detail */}
    </View>
  );
};

export default CardDetailScreen;

const $screenContentContainer: ViewStyle = {
  display:"flex",
  alignContent:"center",

}
