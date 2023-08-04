import React from 'react';
import { View, ViewStyle, Image, ImageBackground, TouchableOpacity , ImageSourcePropType, Alert} from 'react-native';
import { Text } from '../../components';
import { colors } from '../../theme';
import { ScrollView } from 'react-native-gesture-handler';
import { FilmILike } from '../../data/filmData';


const CardDetailScreen = ({ route , navigation}) => {  {/*En ajoutant navigation aux props de la composante, on peut maintenant utiliser navigation.goBack()*/}
  const { titre, annee, affiche , duree , genre ,synopsis, realisateur, distributions } = route.params;
  const backArrrow = require("../../../assets/icons/backarrow.png")
  const heart = require("../../../assets/icons/blackheart.png")
  const popcorn = require("../../../assets/images/popcorn.png")
  const bookmark = require("../../../assets/images/bookmarks.png")

    // Fonction pour ajouter le film dans FilmILike
    const addFilmToLiked = () => {
      FilmILike.push({
        titre,
        annee,
        affiche,
        duree,
        genre,
        synopsis,
        realisateur,
        distributions,
      });
      // Vous pouvez ajouter ici une logique pour indiquer à l'utilisateur que le film a été ajouté aux favoris
      Alert.alert("Film ajouté aux favoris")
      console.log("FilmILike:", FilmILike);
    };

  return (
    <ScrollView style={$scrollViewing}>
    <View style={$screenContentContainer}>
      <ImageBackground
        source={affiche}
        style={{ height: 450, alignItems: 'center' }}
      >
        <View style={ $buttonContainer}>
        <TouchableOpacity style={$returnButton}  onPress={() => navigation.goBack()}>{/* Utiliser onPress pour revenir à l'écran précédent */}
          <Image source={backArrrow}  style={{ height: 25, width:25, marginTop:12 , marginRight:5 , alignItems:'center'}}></Image>
        </TouchableOpacity>
        <TouchableOpacity style={$LikeButton} onPress={addFilmToLiked}>
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
        <Text preset="bold" style={{color: colors.palette.red , fontSize:18}}>Film</Text>
        <View style={$titleContainer}>
        <Text preset="bold" style={{ fontSize:18 }}> {titre}</Text>
        <Image source={popcorn} style={{ height:30 , width:30}}/>
        </View>
        <View style={$titleContainer}>
        <Text style={{ color:colors.palette.darkGray}}>Genre : {genre}</Text>
        <Text style={{ color:colors.palette.darkGray}}>Durée : {duree}</Text>
        <Image source={bookmark} style={{ height:30 , width:30 , tintColor:colors.palette.red}}/>
        </View>
        <View style={$titleContainer}>
        <Text preset="bold" style={{ fontSize:18}}>Synopsis : </Text>
        </View>
        <View style={$titleContainer}>
        <Text style={{ color:colors.palette.darkGray}}>{synopsis}</Text>
        </View>
        <View style={$titleContainer}>
        <Text style={{ color:colors.palette.darkGray , marginTop:15}}>Réalisateur : {realisateur}</Text>
        </View>
        <View style={$titleContainer}>
        <Text style={{ color:colors.palette.darkGray , marginTop:20}}>Distribution : {distributions}</Text>
        </View>
        <View style={$titleContainer}>
        <Text style={{ color:colors.palette.darkGray , marginTop:20}}>Année : {annee}</Text>
        </View>

      </View>
    </View>
    </ScrollView>
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

const $scrollViewing: ViewStyle = {
  flexGrow: 1, // This allows the ScrollView to grow and fill the available space
  paddingBottom: 20, // Adjust as needed
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
