import React from 'react';
import { View, Text, ViewStyle, Image, ImageSourcePropType, ImageBackground, TouchableOpacity } from 'react-native';
import { colors } from '../../theme';

const CardDetailScreen = ({ route }) => {
  const { titre, annee, affiche } = route.params;
  const backArrrow = require("../../../assets/icons/backarrow.png")
  const heart = require("../../../assets/icons/blackheart.png")
  return (
    <View style={$screenContentContainer}>
      <ImageBackground
        source={affiche}
        style={{ height: 450, alignItems: 'center' }}
      >
        <View style={ $buttonContainer}>
        <TouchableOpacity style={$returnButton} >
          <Image source={backArrrow}  style={{ height: 25, width:25, marginTop:12 , marginRight:5 , alignItems:'center'}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={$LikeButton} >
          <Image source={heart}  style={{ height: 35, width:35, marginTop:5 , alignItems:'center' , tintColor:colors.palette.green}}></Image>
        </TouchableOpacity>
        </View>
        <View style={ $buttonContainerOnlyRight}>
        <TouchableOpacity style={$DisLikeButton} >
          <Image source={backArrrow}  style={{ height: 25, width:25, marginTop:12 , marginRight:5 , alignItems:'center'}}></Image>
        </TouchableOpacity>
        </View>

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
  justifyContent:'space-between',

}

const $buttonContainer: ViewStyle = {
  width: '100%',
  display: "flex",
  flexDirection: 'row',
  justifyContent:'space-between',
  paddingHorizontal: 20,
}
const $buttonContainerOnlyRight: ViewStyle = {
  width: '100%',
  display: "flex",
  flexDirection: 'row-reverse',
  justifyContent:'space-between',
  paddingHorizontal: 20,
  marginTop:30
}


const $returnButton: ViewStyle = {
  top: 40,
  borderWidth:1,
  borderColor:'rgba(0,0,0,0.2)',
  alignItems:'center',
  justifyContent:'flex-start',
  width:50,
  height:50,
  backgroundColor: colors.palette.red,
  borderRadius:50,
}

const $LikeButton: ViewStyle = {
  top: 40,
  borderWidth:2.5,
  borderColor:colors.palette.green,
  alignItems:'center',
  justifyContent:'flex-start',
  width:50,
  height:50,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  borderRadius:50,
}

const $DisLikeButton: ViewStyle = {
  top: 40,
  borderWidth:2.5,
  borderColor:colors.palette.red,
  alignItems:'center',
  justifyContent:'flex-start',
  width:50,
  height:50,
  backgroundColor: 'rgba(0, 0, 0, 0.1)',
  borderRadius:50,
}




const $bottomOverlay: ViewStyle = {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 20, // Ajustez la hauteur de la zone de transparence ici
  backgroundColor: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, ))', // Dégradé linéaire pour l'effet de transparence inversé
}
