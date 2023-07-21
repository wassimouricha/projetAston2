import React from 'react';
import { View, Text, ViewStyle, Image, ImageSourcePropType, ImageBackground } from 'react-native';

const CardDetailScreen = ({ route }) => {
  const { titre, annee, affiche } = route.params;

  return (
    <View style={$screenContentContainer}>
      <ImageBackground
        source={affiche}
        style={{ height: 450, alignItems: 'center' }}
      >
        <View style={$bottomOverlay} />

      </ImageBackground>
      <View style={ $smallContentContainer}>
        <Text>Film</Text>
        <View style={$titleContainer}>
        <Text> {titre}</Text>
        <Text>Logo</Text>
        </View>
        <View style={$titleContainer}>
        <Text>Genre : {titre}</Text>
        <Text>Durée : </Text>
        </View>

      </View>
    </View>
  );
};

export default CardDetailScreen;

const $screenContentContainer: ViewStyle = {
  display: "flex",
  alignContent: "center",
}

const $smallContentContainer: ViewStyle = {
  display: "flex",
  paddingHorizontal: 20,
}

const $titleContainer: ViewStyle = {
  display: "flex",
  flexDirection: 'row',
  justifyContent:'space-between'
}



const $bottomOverlay: ViewStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 20, // Ajustez la hauteur de la zone de transparence ici
  backgroundColor: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, ))', // Dégradé linéaire pour l'effet de transparence inversé
}
